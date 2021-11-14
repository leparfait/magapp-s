import { Module } from '@nestjs/common';
import { MagazinePayersService } from './magazine-payers.service';
import { MagazinePayersController } from './magazine-payers.controller';

@Module({
  controllers: [MagazinePayersController],
  providers: [MagazinePayersService]
})
export class MagazinePayersModule {}
