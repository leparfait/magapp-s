import { Module } from '@nestjs/common';
import { AbonnementsService } from './abonnements.service';
import { AbonnementsController } from './abonnements.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Abonnement } from './entities/abonnement.entity';

@Module({
  imports: [SequelizeModule.forFeature([Abonnement])],
  controllers: [AbonnementsController],
  providers: [AbonnementsService]
})
export class AbonnementsModule {}
