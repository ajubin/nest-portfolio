import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ChatModule } from './chat/chat.module';
import { PostMessageService } from './chat/post-message/post-message.service';
import { EnvironmentService } from './shared/environment/environment.service';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [ChatModule, SharedModule],
  controllers: [AppController],
  providers: [PostMessageService, EnvironmentService],
})
export class AppModule {}
