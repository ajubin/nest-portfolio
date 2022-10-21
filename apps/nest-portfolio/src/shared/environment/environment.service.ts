import { Injectable } from '@nestjs/common';

let id = 0;

@Injectable()
export class EnvironmentService {
  public value: number;
  constructor() {
    this.construct();
  }

  // workaround to spy on constructor
  public construct() {
    this.value = id;
    console.log('EnvironmentService init : ', this.value);
    id++;
  }

  public getEnv() {
    console.log(`EnvService used in app : ${this.value}`);
    return 'prod';
  }
}
