import { Injectable } from '@nestjs/common';
import { BetterEnvService } from '../../shared/better-env/better-env.service';
import { EnvironmentService } from '../../shared/environment/environment.service';

@Injectable()
export class PostMessageService {
  constructor(
    private readonly env: EnvironmentService,
    private readonly betterEnv: BetterEnvService,
  ) {}

  public execute() {
    this.env.getEnv();
    this.betterEnv.getEnv();
  }
}
