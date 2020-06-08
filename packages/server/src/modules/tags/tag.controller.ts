import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private tagService: TagService) {}
  @Get(':text?')
  async listTags(@Param('text') text: string) {
    const { tagService } = this;
    const tags = await (text ? tagService.find({ text }) : tagService.find());
    return tags;
  }

  @Post(':text?')
  async upsertTag(@Param('text') text: string) {
    const { tagService } = this;
    return tagService.upsert({ text }, { text });
  }

  @Delete(':text')
  async deleteTag(@Param('text') text: string) {
    const { tagService } = this;
    return tagService.del(text);
  }
}
