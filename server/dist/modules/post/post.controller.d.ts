import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto/create-post-dto';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    getPostById(id: string): Promise<import("./schemas/post.schema").Post>;
    savePost(id: string, postDto: CreatePostDto | UpdatePostDto): Promise<string>;
}
