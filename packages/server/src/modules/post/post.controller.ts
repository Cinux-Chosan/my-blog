import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import {
  CreatePostDto,
  UpdatePostDto,
  QueryPostDto,
  postStatus,
  postType,
} from './dto/create-post-dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard'
import compiler from 'compiler';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) { }

  @Get('types')
  getPostType() {
    return Object.values(postType);
  }

  @Get(':id?')
  async queryPosts(@Param('id') id: string, @Query() query: QueryPostDto) {
    return this.postService.find(id, query);
  }

  // @UseGuards(AuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post(':id?')
  async savePost(
    @Param('id') id: string,
    @Body() postDto: CreatePostDto | UpdatePostDto,
  ) {
    const { postService } = this;
    const { script } = postDto;
    let scriptCompiled = '';
    if (script) {
      // 编译附加 js 脚本
      scriptCompiled = compiler.blog(script).code;
    }
    postDto.scriptCompiled = scriptCompiled;
    if (id) {
      await postService.update(id, postDto);
    } else {
      ({ _id: id } = await postService.create(postDto as CreatePostDto));
    }
    return id;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delPost(@Param('id') id: string) {
    const { postService } = this;
    if (id) {
      return postService.del(id);
    }
  }
}
