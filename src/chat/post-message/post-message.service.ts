import { Injectable } from '@nestjs/common';
import { EnvironmentService } from '../../shared/environment/environment.service';

@Injectable()
export class PostMessageService {
  constructor(private readonly env: EnvironmentService) {}

  public execute() {
    return this.env.getEnv();
  }
}
