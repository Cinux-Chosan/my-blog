import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post, PostSchema } from './schemas/post.schema';

const PostSchemaModule = MongooseModule.forFeatureAsync([
  {
    name: Post.name,
    useFactory: () => {
      PostSchema.pre('save', function (this: Post) {
        this.createdAt = this.createdAt || new Date();
      });
      return PostSchema;
    },
  },
])

@Module({
  imports: [PostSchemaModule],
  controllers: [PostController],
  providers: [PostService],
  exports: [MongooseModule]
})
export class PostsModule { }
