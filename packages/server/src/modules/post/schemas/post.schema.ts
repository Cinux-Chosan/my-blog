import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { postStatus } from '../dto/create-post-dto'
import { TagSchema } from '../../tags/schemas/tag.schema'
import { CreateTagDto } from '../../tags/dto/create-tag-dto'
@Schema()
export class Post extends Document {
  @Prop({ default: 'Chosan' })
  author: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  html: string;

  @Prop({ type: [TagSchema] })
  tags: CreateTagDto[];

  @Prop({})
  createdAt: Date;

  @Prop({ default: new Date })
  updatedAt: Date;


  @Prop({ default: postStatus.activated })
  status: postStatus
}

export const PostSchema = SchemaFactory.createForClass(Post);
