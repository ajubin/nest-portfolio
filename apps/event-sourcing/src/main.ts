import { NestFactory } from '@nestjs/core';
import { EventSourcingModule } from './event-sourcing.module';

async function bootstrap() {
  const app = await NestFactory.create(EventSourcingModule);
  await app.listen(3000);
}
bootstrap();
