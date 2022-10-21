import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { BetterEnvService } from './shared/better-env/better-env.service';
import { EnvironmentService } from './shared/environment/environment.service';

describe('AppController', () => {
  let appController: AppController;
  let spyBadEnv: any;
  let spyBetterEnv: any;

  beforeEach(async () => {
    spyBadEnv = jest.spyOn(EnvironmentService.prototype, 'construct');
    spyBetterEnv = jest.spyOn(BetterEnvService.prototype, 'construct');
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    appController = app.get<AppController>(AppController);
    const envService = app.get<EnvironmentService>(EnvironmentService);
    console.log(`EnvService used in test : ${envService.value}`);
    const betterEnvService = app.get<BetterEnvService>(BetterEnvService);
    console.log(`BetterEnvService used in test : ${betterEnvService.value}`);
  });

  describe('root', () => {
    it('showcase bad dependcy injection', () => {
      appController.getHello();
      expect(spyBadEnv).toHaveBeenCalledTimes(3);
      expect(spyBetterEnv).toHaveBeenCalledTimes(1);
    });
  });
});
