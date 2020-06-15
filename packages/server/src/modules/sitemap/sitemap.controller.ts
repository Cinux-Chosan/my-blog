import { Controller, Get, Header, HostParam } from '@nestjs/common';
import { SitemapService } from './sitemap.service'

@Controller('sitemap.xml')
export class SitemapController {
  constructor(private sitemapService: SitemapService) { }
  @Get()
  @Header('Content-Type', 'application/xml; charset=utf-8')
  sitemap() {
    return this.sitemapService.create();
  }
}
