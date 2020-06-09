import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tag extends Document {
  @Prop({ required: true })
  text: string;

  @Prop()
  createdAt: Date;

  // 关联的文章外键
  @Prop()
  posts: string[];
}

export const TagSchema = SchemaFactory.createForClass(Tag);
