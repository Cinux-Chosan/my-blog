import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag-dto';

@Controller('tags')
export class TagController {
  constructor(private tagService: TagService) {}
  @Get(':id?')
  listTags(@Param('id') id: string) {
    const { tagService } = this;
    return id ? tagService.find() : tagService.find({ _id: id });
  }

  @Post(':id?')
  async upsertTag(@Param('id') id: string, @Body() tag: CreateTagDto) {
    const { tagService } = this;
    ({ _id: id } = await tagService.upsert({ _id: id }, tag));
    return id;
  }
}
