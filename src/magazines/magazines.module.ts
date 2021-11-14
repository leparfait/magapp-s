import { Module } from '@nestjs/common';
import { MagazinesService } from './magazines.service';
import { MagazinesController } from './magazines.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Magazine } from './entities/magazine.entity';

@Module({
  imports: [SequelizeModule.forFeature([Magazine])],
  controllers: [MagazinesController],
  providers: [MagazinesService]
})
export class MagazinesModule {}
