import { Module } from '@nestjs/common';
import { SitemapController } from './sitemap.controller';
import { PostsModule } from '../post/post.module'
import { TagsModule } from '../tags/tag.module'
import { SitemapService } from './sitemap.service';
@Module({
  imports: [PostsModule, TagsModule],
  controllers: [SitemapController],
  providers: [SitemapService]
})
export class SitemapModule { }
