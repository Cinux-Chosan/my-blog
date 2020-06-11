import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tag extends Document {
  @Prop({ required: true })
  text: string;

  @Prop()
  createdAt: Date;

}

export const TagSchema = SchemaFactory.createForClass(Tag);
