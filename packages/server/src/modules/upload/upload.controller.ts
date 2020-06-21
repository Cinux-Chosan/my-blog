import { Controller, Post, UseInterceptors, UploadedFile, Query, Inject, Get } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import * as QnUplaoder from 'qn-uploader'
import * as path from 'path'
import * as fsExtra from 'fs-extra'
import * as url from 'url'

@Controller('blog-upload')
export class UploadController {
  constructor(@Inject('CONFIG') private config, @Inject('CERT') private cert) { }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async ploadFile(@UploadedFile('file') file, @Query('dest') dest = '') {
    const { config, cert } = this;
    const { uploadDir, qnConfig, fe } = config
    const { originalname, buffer } = file;
    const { qnCert } = cert;
    dest = path.join(dest, originalname)
    const qnPrefix = 'blog-upload'
    const localDest = path.join('../../blog-upload', dest)
    console.log('localDest', localDest)
    const saveLocal = fsExtra.outputFile(localDest, buffer)
    const uploader = new QnUplaoder({ ...qnCert, ...qnConfig })
    const qnDest = path.join(qnPrefix, dest);
    await Promise.all([saveLocal, uploader.uploadOne({ filename: qnDest, content: buffer })])
    return new url.URL(qnDest, fe.publicPathUrl)
  }

  @Get()
  getStaticUrl() {

  }
}
