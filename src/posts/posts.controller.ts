import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostInterface } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get()
    findAll(@Query('search') search?: string): PostInterface[] {
        const extractAllPosts = this.postsService.findAll();

        if (search) {
            return extractAllPosts.filter((post) =>
                post.title.toLowerCase().includes(search.toLowerCase()),
            );
        }

        return extractAllPosts;
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): PostInterface {
        return this.postsService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() createPostData: Omit<PostInterface, 'id' | 'createdAt'>)
        : PostInterface {
        return this.postsService.create(createPostData)
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number,
        @Body() updatedPostData: Partial<Omit<PostInterface, 'id' | 'createdAt'>>): PostInterface {
        return this.postsService.update(id, updatedPostData);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseIntPipe) id: number): { message: string } {
        return this.postsService.remove(id);
    }



}
