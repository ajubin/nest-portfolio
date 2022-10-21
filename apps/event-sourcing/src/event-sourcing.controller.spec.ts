import { Test, TestingModule } from '@nestjs/testing';
import { EventSourcingController } from './event-sourcing.controller';
import { EventSourcingService } from './event-sourcing.service';

describe('EventSourcingController', () => {
  let eventSourcingController: EventSourcingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EventSourcingController],
      providers: [EventSourcingService],
    }).compile();

    eventSourcingController = app.get<EventSourcingController>(EventSourcingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(eventSourcingController.getHello()).toBe('Hello World!');
    });
  });
});
