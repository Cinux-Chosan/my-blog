import { Controller, Get, Post, Param, Delete, UseGuards } from '@nestjs/common';
import { TagService } from './tag.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('tags')
export class TagController {
  constructor(private tagService: TagService) { }
  @Get(':text?')
  async listTags(@Param('text') text: string) {
    const { tagService } = this;
    const tags = await (text ? tagService.find({ text }) : tagService.find());
    return tags;
  }

  @UseGuards(AuthGuard)
  @Post(':text?')
  async upsertTag(@Param('text') text: string) {
    const { tagService } = this;
    return tagService.upsert({ text }, { text });
  }
  
  @UseGuards(AuthGuard)
  @Delete(':text')
  async deleteTag(@Param('text') text: string) {
    const { tagService } = this;
    return tagService.del(text);
  }
}
