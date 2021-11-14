import { Test, TestingModule } from '@nestjs/testing';
import { TypeAbonnementsService } from './type-abonnements.service';

describe('TypeAbonnementsService', () => {
  let service: TypeAbonnementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeAbonnementsService],
    }).compile();

    service = module.get<TypeAbonnementsService>(TypeAbonnementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
