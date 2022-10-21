import { Module } from '@nestjs/common';
import { EventSourcingController } from './event-sourcing.controller';
import { EventSourcingService } from './event-sourcing.service';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [EventSourcingController],
  providers: [EventSourcingService, PrismaService, UserService],
})
export class EventSourcingModule {}
