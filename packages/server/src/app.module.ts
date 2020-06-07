import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/post/post.module';
import { TagsModule } from './modules/tags/tag.module';
import { UserModule } from './modules/user/user.module';

@Global()
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/post'),
    PostsModule,
    TagsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [UserModule]
})
export class AppModule { }
