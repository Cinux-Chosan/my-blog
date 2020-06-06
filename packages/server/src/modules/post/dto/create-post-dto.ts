import { CreateTagDto } from '../../tags/dto/create-tag-dto'

export enum postStatus {
  deleted,
  activated
}

export class CreatePostDto {
  title: string
  content: string
  html: string
  author: string
  status: postStatus
  tags?: CreateTagDto[]
}

export class UpdatePostDto {
  title: string
  content: string
  html: string
  author?: string
  status?: postStatus
  tags?: CreateTagDto[]
}
