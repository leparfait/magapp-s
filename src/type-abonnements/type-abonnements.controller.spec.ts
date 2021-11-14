import { Test, TestingModule } from '@nestjs/testing';
import { TypeAbonnementsController } from './type-abonnements.controller';
import { TypeAbonnementsService } from './type-abonnements.service';

describe('TypeAbonnementsController', () => {
  let controller: TypeAbonnementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeAbonnementsController],
      providers: [TypeAbonnementsService],
    }).compile();

    controller = module.get<TypeAbonnementsController>(TypeAbonnementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
