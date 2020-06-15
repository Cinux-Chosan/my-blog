import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tag, TagSchema } from './schemas/tag.schema';

const tagSchemaModule =
  MongooseModule.forFeatureAsync([{
    name: Tag.name,
    useFactory: () => {
      TagSchema.pre('save', function (this: Tag) {
        this.createdAt = this.createdAt || new Date
      })
      return TagSchema
    }
  }])
@Module({
  imports: [tagSchemaModule],
  controllers: [TagController],
  providers: [TagService],
  exports: [MongooseModule]
})
export class TagsModule { }
