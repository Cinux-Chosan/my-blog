import { Model } from 'mongoose';
import { CreatePostDto, UpdatePostDto } from './dto/create-post-dto';
import { Post } from './schemas/post.schema';
export declare class PostService {
    private postModel;
    constructor(postModel: Model<Post>);
    create(postDto: CreatePostDto): Promise<Post>;
    update(id: string, postDto: UpdatePostDto): Promise<any>;
    findOne(id: string): Promise<Post>;
}
