import { Controller, Get } from '@nestjs/common';
import { PostMessageService } from './chat/post-message/post-message.service';

@Controller()
export class AppController {
  constructor(private readonly postMessage: PostMessageService) {}

  @Get()
  getHello(): string {
    return this.postMessage.execute();
  }
}
