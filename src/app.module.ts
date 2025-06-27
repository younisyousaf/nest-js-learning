import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

// root module -> use all the sub modules

@Module({
    imports: [PostsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
