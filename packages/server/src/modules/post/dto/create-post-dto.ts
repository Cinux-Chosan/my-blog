import { CreateTagDto } from '../../tags/dto/create-tag-dto';

export enum postStatus {
  deleted,
  activated,
}

export class CreatePostDto {
  title: string;
  summary: string;
  content: string;
  html: string;
  author: string;
  status: postStatus;
  tags?: CreateTagDto[];
  banners?: string[];
}

export class UpdatePostDto {
  title: string;
  summary: string;
  content: string;
  html: string;
  author?: string;
  status?: postStatus;
  tags?: CreateTagDto[];
  banners?: string[];
}


export class QueryPostDto {
  // 标题片段
  titleChunk: string
  // 文章内容片段
  contentChunk: string
  // 标签
  tag: string
}