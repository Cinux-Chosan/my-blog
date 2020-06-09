import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post, PostSchema } from './schemas/post.schema';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Post.name,
        useFactory: () => {
          PostSchema.pre('save', function(this: Post) {
            this.createdAt = this.createdAt || new Date();
          });
          return PostSchema;
        },
      },
    ]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostsModule {}
