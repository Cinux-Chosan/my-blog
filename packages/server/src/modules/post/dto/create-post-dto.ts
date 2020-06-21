import { CreateTagDto } from '../../tags/dto/create-tag-dto';

export enum postStatus {
  deleted,
  activated,
}

export enum postType {
  // 文章
  post = 'post',
  // 专题
  topic = 'topic',
  // 专题子文章
  topicPost = 'topicPost',
}

export class CreatePostDto {
  title: string;
  summary: string;
  content: string;
  html: string;
  author: string;
  status: postStatus;
  type: postType;
  tags?: CreateTagDto[];
  banners?: string[];
}

export class UpdatePostDto {
  title: string;
  summary: string;
  content: string;
  html: string;
  type: postType;
  author?: string;
  status?: postStatus;
  tags?: CreateTagDto[];
  banners?: string[];
}

export class QueryPostDto {
  // 标题片段
  titleChunk: string;
  // 文章内容片段
  contentChunk: string;
  // 标签
  tag: string;
}
