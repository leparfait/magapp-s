import { Test, TestingModule } from '@nestjs/testing';
import { MagazinePayersService } from './magazine-payers.service';

describe('MagazinePayersService', () => {
  let service: MagazinePayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MagazinePayersService],
    }).compile();

    service = module.get<MagazinePayersService>(MagazinePayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
