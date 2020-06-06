import { Injectable } from '@nestjs/common';
import { Tag } from './schemas/tag.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery, UpdateQuery } from 'mongoose';
import { CreateTagDto } from './dto/create-tag-dto';

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>) { }

  find(query?: FilterQuery<Tag>) {
    return this.tagModel.find(query);
  }

  upsert(query: FilterQuery<Tag>, doc: UpdateQuery<Tag> | CreateTagDto) {
    return this.tagModel.updateOne(query, doc, { upsert: true });
  }

  del(text: string) {
    return this.tagModel.deleteOne({ text })
  }
}
