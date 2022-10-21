import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { EnvironmentService } from './shared/environment/environment.service';

describe('AppController', () => {
  let appController: AppController;
  let spy: any;

  beforeEach(async () => {
    spy = jest.spyOn(EnvironmentService.prototype, 'construct');
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    appController = app.get<AppController>(AppController);
    const envService = app.get<EnvironmentService>(EnvironmentService);
    console.log(`EnvService used in test : ${envService.value}`);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      appController.getHello();
      expect(spy).toHaveBeenCalledTimes(3);
    });
  });
});
