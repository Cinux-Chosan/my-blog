import { Controller, Get, Param, Post, Body, Delete, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto/create-post-dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('posts')

export class PostController {
  constructor(private postService: PostService) { }
  @Get(':id?')
  async getPostById(@Param('id') id: string) {
    return await this.postService.find(id);
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
