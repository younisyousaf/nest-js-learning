import { Injectable } from '@nestjs/common';

//normal function where we can write all the business logic
//post -> logic

@Injectable()
export class HelloService {
  getHello(): string {
    return 'Hello Nest JS!';
  }

  getHelloWithName(name: string): string {
    return `Hello ${name}!`;
  }
}
