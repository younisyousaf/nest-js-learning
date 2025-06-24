import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// root file -> entry point of the application

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //global settings
  //environment variables

  //start a server
  await app.listen(process.env.PORT ?? 3003);
}
bootstrap();
