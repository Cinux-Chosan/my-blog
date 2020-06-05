import { Document } from 'mongoose';
export declare class Post extends Document {
    author: string;
    title: string;
    content: string;
    tags: string[];
}
export declare const PostSchema: import("mongoose").Schema<any>;
