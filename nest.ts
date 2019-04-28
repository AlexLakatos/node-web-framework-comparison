import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';


export class EventDataType {
  readonly from: string;
  readonly to: string;
  readonly uuid: string;
  readonly conversation_uuid: string;
  readonly status: string;
  readonly direction: string;
  readonly timestamp: string;
}

@Controller()
export class AppController {
  constructor() { }

  @Get()
  getHello(): Object {
    return {
      talk: "Hello from nest"
    };
  }

  @Post()
  @HttpCode(200)
  async postEvent(@Body() body: EventDataType) {
    console.log(body);
  }
}

@Module({
  imports: [],
  controllers: [AppController],
  providers: []
})
export class AppModule { }


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
