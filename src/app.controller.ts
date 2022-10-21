import { Controller, Get } from '@nestjs/common';
import { PostMessageService } from './chat/post-message/post-message.service';
import { EnvironmentService } from './shared/environment/environment.service';

@Controller()
export class AppController {
  constructor(
    private readonly postMessage: PostMessageService,
    private readonly envService: EnvironmentService,
  ) {}

  @Get()
  getHello(): void {
    console.log(
      `EnvironmentService used in AppController: ${this.envService.value}`,
    );
    this.postMessage.execute();
  }
}
