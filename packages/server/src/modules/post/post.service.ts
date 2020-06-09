import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePostDto, UpdatePostDto, postStatus } from './dto/create-post-dto';
import { Post } from './schemas/post.schema';
@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) { }

  async create(postDto: CreatePostDto) {
    const createdPost = new this.postModel(postDto);
    return createdPost.save();
  }
  async update(id: string, postDto: UpdatePostDto) {
    const result = await this.postModel.updateOne({ _id: id }, postDto);
    if (result.nModified) {
      // 更新成功
      return result;
    }
  }
  async find(id: string) {
    return this.postModel.find(id ? { _id: id } : {}).sort('-updatedAt');
  }
  async del(id: string) {
    const result = await this.postModel.updateOne({ _id: id }, { status: postStatus.deleted })
    if (result.nModified) {
      return result;
    }
  }
}
