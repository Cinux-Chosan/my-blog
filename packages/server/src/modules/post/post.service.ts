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

  /**
   * 查询文章数据，如果有 id 则查询特定 id 的文章，如果没有 id 则查询所有文章。
   * @param id 文章ID
   * @param status 文章状态，默认查询未删除状态的文章
   */
  async find(id?: string, query?: any) {
    const queryObj = { status: postStatus.activated } as any;
    const { page = 1, limit = 10 } = query;
    // 匹配 id
    id && (queryObj._id = id)
    // 模糊匹配标题
    query.titleChunk && (queryObj.title = { $regex: new RegExp(query.titleChunk, 'i') })
    // 模糊匹配内容
    query.contentChunk && (queryObj.content = { $regex: new RegExp(query.contentChunk, 'i') })
    // 包含标签匹配
    query.tag && (queryObj.tags = { $elemMatch: { text: query.tag } });
    console.log(queryObj, page, limit)
    const qPosts = this.postModel.find(queryObj).sort('-updatedAt').skip((page - 1) * limit).limit(Number(limit));
    const qTotal = this.postModel.find(queryObj).count()
    const [posts, total] = await Promise.all([qPosts, qTotal])
    return { posts, pagination: { total, limit, page } }
  }

  async del(id: string) {
    return this.postModel.updateOne(
      { _id: id },
      { status: postStatus.deleted },
    );
  }
}
