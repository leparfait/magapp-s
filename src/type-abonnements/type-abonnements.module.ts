import { Module } from '@nestjs/common';
import { TypeAbonnementsService } from './type-abonnements.service';
import { TypeAbonnementsController } from './type-abonnements.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TypeAbonnement } from './entities/type-abonnement.entity';

@Module({
  imports: [SequelizeModule.forFeature([TypeAbonnement])],
  controllers: [TypeAbonnementsController],
  providers: [TypeAbonnementsService]
})
export class TypeAbonnementsModule {}
