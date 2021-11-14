import { Module } from '@nestjs/common';
import { MagazinePayersService } from './magazine-payers.service';
import { MagazinePayersController } from './magazine-payers.controller';
import { MagazinePayer } from './entities/magazine-payer.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([MagazinePayer])],
  controllers: [MagazinePayersController],
  providers: [MagazinePayersService]
})
export class MagazinePayersModule {}
