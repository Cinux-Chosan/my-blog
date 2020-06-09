import { Controller, Get, Param, Post, Body, Delete, UseGuards, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto, QueryPostDto, postStatus } from './dto/create-post-dto';
import { AuthGuard } from 'src/guards/auth.guard';


@Controller('posts')

export class PostController {
  constructor(private postService: PostService) { }
  @Get(':id?')
  async queryPosts(@Param('id') id: string, @Query() query: QueryPostDto) {
    const queryObj = { status: postStatus.activated } as any;
    // 匹配 id
    id && (queryObj._id = id)
    // 模糊匹配标题
    query.titleChunk && (queryObj.title = { $regex: new RegExp(query.titleChunk, 'i') })
    // 模糊匹配内容
    query.contentChunk && (queryObj.content = { $regex: new RegExp(query.contentChunk, 'i') })
    // 包含标签匹配
    query.tag && (queryObj.tags = { $elemMatch: { text: query.tag } });
    return this.postService.find(queryObj);

  }

  @UseGuards(AuthGuard)
  @Post(':id?')
  async savePost(
    @Param('id') id: string,
    @Body() postDto: CreatePostDto | UpdatePostDto,
  ) {
    const { postService } = this;
    if (id) {
      await postService.update(id, postDto);
    } else {
      ({ _id: id } = await postService.create(postDto as CreatePostDto));
    }
    return id;
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delPost(@Param('id') id: string) {
    const { postService } = this;
    if (id) {
      return postService.del(id);
    }
  }
}
