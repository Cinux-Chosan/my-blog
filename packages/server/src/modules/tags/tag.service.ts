import { Injectable } from '@nestjs/common';
import { Tag } from './schemas/tag.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery, UpdateQuery } from 'mongoose';

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>) {}

  find(query?: FilterQuery<Tag>) {
    return this.tagModel.find(query);
  }

  upsert(query: FilterQuery<Tag>, doc: UpdateQuery<Tag>) {
    return this.tagModel.updateOne(query, doc, { upsert: true });
  }
}
