import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostsService {
    private posts: Post[] = [
        {
            id: 1,
            title: 'First',
            content: "First Post Content",
            authorName: "Younis Yousaf",
            createdAt: new Date(),
        }
    ];

    findAll(): Post[] {
        return this.posts;
    }

    findOne(id: number): Post {
        const singlePost = this.posts.find(post => post.id === id);

        if (!singlePost) throw new NotFoundException(`Post with id ${id} not found`);
        return singlePost;
    }

    create(createPostData: Omit<Post, 'id' | 'createdAt'>): Post {
        const newPost: Post = {
            id: this.getNextId(),
            ...createPostData,
            createdAt: new Date(),
        };

        this.posts.push(newPost);
        return newPost;
    }

    update(id: number, updatePostData: Partial<Omit<Post, 'id' | 'createdAt'>>): Post {
        const currentPostIndexToEdit = this.posts.findIndex(post => post.id === id);

        if (currentPostIndexToEdit === -1) throw new NotFoundException(`Post with id ${id} not found`);

        this.posts[currentPostIndexToEdit] = {
            ...this.posts[currentPostIndexToEdit],
            ...updatePostData,
            updatedAt: new Date(),
        };

        return this.posts[currentPostIndexToEdit];
    }

    remove(id: number): { message: string } {
        const postIndexToRemove = this.posts.findIndex(post => post.id === id);

        if (postIndexToRemove === -1) throw new NotFoundException(`Post with id ${id} not found`);

        this.posts.splice(postIndexToRemove, 1);
        return { message: `Post with ID ${id} deleted successfully` };

    }


    private getNextId(): number {
        return this.posts.length > 0 ?
            Math.max(...this.posts.map(post => post.id)) + 1 : 1;
    }
}
