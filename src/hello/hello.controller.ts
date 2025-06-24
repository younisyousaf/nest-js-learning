import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

// Here we handle all the https requests (incoming requests & returning responses to the client)
//get , post, put, delete
//it uses dependency injection to consume the services

//localhost:3000/hello

//express ->
//server.js -> routes, controller, services
//route A -> controller A -> service A

@Controller('hello')
export class HelloController {
  //dependency injection
  constructor(private readonly helloService: HelloService) {}

  //   @Get('first-route')
  @Get('first-route')
  getHello(): string {
    return this.helloService.getHello();
  }

  @Get('user/:name')
  getHelloWithName(@Param('name') name: string): string {
    return this.helloService.getHelloWithName(name);
  }

  // /hello/query?name=John
  @Get('query')
  getHelloWithQuery(@Query('name') name: string): string {
    return this.helloService.getHelloWithName(name);
  }
}
