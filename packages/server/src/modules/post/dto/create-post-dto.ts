export enum postStatus {
  deleted,
  activated
}

export class CreatePostDto {
  author: string
  title: string
  content: string
  tags?: string[]
  status: postStatus
}

export class UpdatePostDto {
  title: string
  content: string
  tags?: string[]
  status?: postStatus
}
