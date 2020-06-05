import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {
  @Prop()
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
}

export const PostSchema = SchemaFactory.createForClass(Post);
