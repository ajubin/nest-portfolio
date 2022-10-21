import { Injectable } from '@nestjs/common';

@Injectable()
export class EventSourcingService {
  getHello(): string {
    return 'Hello World!';
  }
}
