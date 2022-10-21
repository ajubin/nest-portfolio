import { Module } from '@nestjs/common';
import { EventSourcingController } from './event-sourcing.controller';
import { EventSourcingService } from './event-sourcing.service';

@Module({
  imports: [],
  controllers: [EventSourcingController],
  providers: [EventSourcingService],
})
export class EventSourcingModule {}
