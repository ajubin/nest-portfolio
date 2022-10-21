import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { EnvironmentService } from '../shared/environment/environment.service';
import { PostMessageService } from './post-message/post-message.service';

@Module({
  imports: [SharedModule],
  providers: [EnvironmentService, PostMessageService],
})
export class ChatModule {}
