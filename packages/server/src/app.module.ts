import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/post/post.module';
import { TagsModule } from './modules/tags/tag.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/post'),
    PostsModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
