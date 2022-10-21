import { Module } from '@nestjs/common';
import { EnvironmentService } from '../shared/environment/environment.service';
import { PostMessageService } from './post-message/post-message.service';

@Module({
  providers: [EnvironmentService, PostMessageService],
})
export class ChatModule {}
