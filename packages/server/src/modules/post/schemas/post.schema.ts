import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { postStatus, postType } from '../dto/create-post-dto';
import { TagSchema } from '../../tags/schemas/tag.schema';
import { CreateTagDto } from '../../tags/dto/create-tag-dto';
@Schema()
export class Post extends Document {
  // 文章类型
  @Prop({ default: postType.post })
  type: string;

  // 文章作者
  @Prop({ default: 'Chosan' })
  author: string;

  // 文章标题
  @Prop({ required: true })
  title: string;

  // 文章原始类容
  @Prop({ required: true })
  content: string;

  // 文章 HTML
  @Prop()
  html: string;

  // 文章标签
  @Prop({ type: [TagSchema] })
  tags: CreateTagDto[];

  // 文章状态，  激活/删除
  @Prop({ default: postStatus.activated })
  status: postStatus;

  // 文章概要
  @Prop({ required: true })
  summary: string;

  // 横幅图片
  @Prop()
  banners: string[];

  // 创建时间
  @Prop({})
  createdAt: Date;

  // 更新时间
  @Prop({ default: new Date() })
  updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
