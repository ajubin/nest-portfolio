import { Injectable } from '@nestjs/common';

let id = 0;

@Injectable()
export class BetterEnvService {
  public value: number;
  constructor() {
    this.construct();
  }

  // workaround to spy on constructor
  public construct() {
    this.value = id;
    console.log('BetterEnvironmentService init : ', this.value);
    id++;
  }

  public getEnv() {
    console.log(`BetterEnvironmentService used in app : ${this.value}`);
    return 'prod';
  }
}
