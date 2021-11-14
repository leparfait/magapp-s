import { Test, TestingModule } from '@nestjs/testing';
import { MagazinePayersController } from './magazine-payers.controller';
import { MagazinePayersService } from './magazine-payers.service';

describe('MagazinePayersController', () => {
  let controller: MagazinePayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MagazinePayersController],
      providers: [MagazinePayersService],
    }).compile();

    controller = module.get<MagazinePayersController>(MagazinePayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
