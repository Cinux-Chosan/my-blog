export class CreatePostDto {
  author: string;
  title: string;
  content: string;
  tags?: string[];
}

export class UpdatePostDto {
  title: string;
  content: string;
  tags?: string[];
}
