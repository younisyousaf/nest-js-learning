import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

//In every nest js application, we need to have at least one module
//module encapsulates a collection of controllers and providers

@Module({
  controllers: [HelloController],
  providers: [HelloService],
  imports: [], // import other modules
  exports: [HelloService], // export services if needed in other modules
})
export class HelloModule {}
