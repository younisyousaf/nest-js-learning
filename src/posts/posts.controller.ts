import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostInterface } from './interfaces/post.interface';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostExistsPipe } from './pipes/post-exists.pipe';

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
    findOne(@Param('id', ParseIntPipe, PostExistsPipe) id: number): PostInterface {
        return this.postsService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    // we can use our pipes here as well like at an individual level
    // @UsePipes(
    //     new ValidationPipe({
    //         whitelist: true,
    //         forbidNonWhitelisted: true
    //     })
    // )
    create(
        // @Body() createPostData: Omit<PostInterface, 'id' | 'createdAt'>)
        @Body() createPostData: CreatePostDto)
        : PostInterface {
        return this.postsService.create(createPostData)
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe, PostExistsPipe) id: number,
        // @Body() updatedPostData: Partial<Omit<PostInterface, 'id' | 'createdAt'>>
        @Body() updatedPostData: UpdatePostDto
    ): PostInterface {
        return this.postsService.update(id, updatedPostData);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseIntPipe, PostExistsPipe) id: number): { message: string } {
        return this.postsService.remove(id);
    }



}
