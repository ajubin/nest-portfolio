import { Controller, Get } from '@nestjs/common';
import { EventSourcingService } from './event-sourcing.service';

@Controller()
export class EventSourcingController {
  constructor(private readonly eventSourcingService: EventSourcingService) {}

  @Get()
  getHello(): string {
    return this.eventSourcingService.getHello();
  }
}
