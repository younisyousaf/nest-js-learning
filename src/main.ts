import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// root file -> entry point of the application

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    //global settings
    //environment variables

    // validating the incoming requests bodies automatically
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, //strip properties that don't have decorators
            forbidNonWhitelisted: true,
            transform: true, //automatically transforms payloads to be objects according to their dto classes
            disableErrorMessages: false
        })
    )

    //start a server
    await app.listen(process.env.PORT ?? 3003);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
