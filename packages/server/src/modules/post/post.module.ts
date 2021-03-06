import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post, PostSchema, preSaveHook } from './schemas/post.schema';

const PostSchemaModule = MongooseModule.forFeatureAsync([
  {
    name: Post.name,
    useFactory: () => {
      PostSchema.pre('save', preSaveHook);
      return PostSchema;
    },
  },
]);

@Module({
  imports: [PostSchemaModule],
  controllers: [PostController],
  providers: [PostService],
  exports: [MongooseModule],
})
export class PostsModule { }
