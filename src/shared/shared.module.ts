import { Module } from '@nestjs/common';
import { EnvironmentService } from './environment/environment.service';
import { BetterEnvService } from './better-env/better-env.service';

@Module({
  providers: [EnvironmentService, BetterEnvService],
  exports: [BetterEnvService],
})
export class SharedModule {}
