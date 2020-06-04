import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePostDto, UpdatePostDto } from './dto/create-post-dto';
import { Post } from './schemas/post.schema';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(postDto: CreatePostDto) {
    const createdPost = new this.postModel(postDto);
    return createdPost.save();
  }
  async update(id: string, postDto: UpdatePostDto) {
      console.log(postDto)
    return this.postModel.updateOne({ _id: id }, postDto);
  }
  async findOne(id: string) {
    return this.postModel.findById(id);
  }
}
