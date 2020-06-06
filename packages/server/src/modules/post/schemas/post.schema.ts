import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { postStatus } from '../dto/create-post-dto'

@Schema()
export class Post extends Document {
  @Prop({ default: 'Chosan' })
  author: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: [String] })
  tags: string[];

  @Prop({
    default: Date.now()
  })
  createTime: Date;

  @Prop({ default: postStatus.activated })
  status: postStatus
}

export const PostSchema = SchemaFactory.createForClass(Post);
