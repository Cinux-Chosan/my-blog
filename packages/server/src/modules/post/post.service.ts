import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CreatePostDto,
  UpdatePostDto,
  postStatus,
} from './dto/create-post-dto';
import { Post } from './schemas/post.schema';
@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(postDto: CreatePostDto) {
    const createdPost = new this.postModel(postDto);
    return createdPost.save();
  }

  async update(id: string, postDto: UpdatePostDto) {
    return this.postModel.updateOne({ _id: id }, postDto);
  }

  /**
   * 查询文章数据，如果有 id 则查询特定 id 的文章，如果没有 id 则查询所有文章。
   * @param id 文章ID
   * @param status 文章状态，默认查询未删除状态的文章
   */
  async find(id: string, status: postStatus = postStatus.activated) {
    const query = { status } as Post;
    id && (query._id = id);
    return this.postModel.find(query).sort('-updatedAt');
  }

  async del(id: string) {
    return this.postModel.updateOne(
      { _id: id },
      { status: postStatus.deleted },
    );
  }
}
