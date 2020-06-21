import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/post/post.module';
import { TagsModule } from './modules/tags/tag.module';
import { UserModule } from './modules/user/user.module';
import { SitemapModule } from './modules/sitemap/sitemap.module';
import { UploadModule } from './modules/upload/upload.module';
import * as globalConfig from '../../../config/global.config';
import * as cert from '../../../config/cert';

@Global()
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/post'),
    PostsModule,
    TagsModule,
    UserModule,
    SitemapModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'CONFIG',
      useValue: globalConfig,
    },
    {
      provide: 'CERT',
      useValue: cert,
    },
  ],
  exports: [UserModule, 'CONFIG', 'CERT'],
})
export class AppModule {}
