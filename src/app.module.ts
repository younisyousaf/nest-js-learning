import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import Joi, * as joi from 'joi'
import appConfig from './config/app.config';

// root module -> use all the sub modules

@Module({
    imports: [
        //it will load the .env file
        ConfigModule.forRoot({
            isGlobal: true, //makes config module available globally
            // validationSchema: joi.object({
            //     PORT: Joi.number().required(),
            // })
            load: [appConfig]
        }),
        HelloModule, UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
