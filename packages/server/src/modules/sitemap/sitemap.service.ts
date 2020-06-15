import { Injectable } from '@nestjs/common';
import { SitemapStream, streamToPromise } from 'sitemap'
import { Model, DocumentDefinition } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from 'src/modules/post/schemas/post.schema'
import { Tag } from 'src/modules/tags/schemas/tag.schema'

@Injectable()
export class SitemapService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
    @InjectModel(Tag.name) private tagModel: Model<Tag>) { }
  async create() {
    const { postModel, tagModel } = this;
    const [posts, tags]: any[][] = await Promise.all([
      postModel.find({}, { _id: true }),
      tagModel.find({}, { text: true })
    ])

    const smStream = new SitemapStream({ hostname: 'https://chosan.cn/' })

    smStream.write({ url: '/posts', changefreq: 'daily', priority: 0.8 }) //  changefreq: 'daily' | 'weekly' | 'monthly' ...

    // 生成文章链接
    posts.forEach((post: DocumentDefinition<Post>) => {
      smStream.write({ url: `/posts/${post._id}` })
    })

    // 生成标签链接
    tags.forEach((tag: DocumentDefinition<Tag>) => {
      smStream.write({ url: `/posts/?tag=${tag.text}` })
    })

    smStream.end()
    const mapBuffer = await streamToPromise(smStream)
    return mapBuffer.toString('utf8')
  }
}
