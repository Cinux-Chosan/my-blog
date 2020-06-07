import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tag, TagSchema } from './schemas/tag.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: Tag.name,
      useFactory: () => {
        TagSchema.pre('save', function (this: Tag) {
          this.createdAt = this.createdAt || new Date
        })
        return TagSchema
      }
    }]),
  ],
  controllers: [TagController],
  providers: [TagService],
})
export class TagsModule { }
