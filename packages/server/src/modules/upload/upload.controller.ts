import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Query,
  Inject,
  Get,
  Redirect,
  Request,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as QnUplaoder from 'qn-uploader';
import * as path from 'path';
import * as fsExtra from 'fs-extra';
import * as url from 'url';

const staticPath = 'static';
@Controller()
export class UploadController {
  constructor(
    @Inject('CONFIG') private config: any,
    @Inject('CERT') private cert: any,
  ) { }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async ploadFile(@UploadedFile('file') file, @Query('dest') dest = '') {
    const { config, cert } = this;
    const { qnConfig, server } = config;
    const { uploadDir: localUploadDir, prefix: apiPrefix } = server;
    const { originalname, buffer } = file;
    const { qnCert } = cert;
    // 处理空格、中文等情况
    const filename = encodeURIComponent(originalname);
    let fullDest = path.join(apiPrefix, staticPath, dest, filename);
    fullDest = fullDest.startsWith('/') ? fullDest.substr(1) : fullDest;
    const localDest = path.join(localUploadDir, fullDest);
    const saveLocal = fsExtra.outputFile(localDest, buffer);
    const uploader = new QnUplaoder({ ...qnCert, ...qnConfig });
    await Promise.all([
      saveLocal,
      uploader.uploadOne({ filename: fullDest, content: buffer }),
    ]);
    return `/${fullDest}`;
  }

  @Get(`${staticPath}/*`)
  @Redirect()
  getStaticUrl(@Request() req) {
    console.log(req.originalUrl);
    const {
      fe: { publicPathUrl },
    } = this.config;
    return {
      url: new url.URL(req.originalUrl, publicPathUrl),
    };
  }
}
