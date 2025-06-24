import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';

// root module -> use all the sub modules

@Module({
  imports: [HelloModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
