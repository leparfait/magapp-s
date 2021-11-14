import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAbonnementDto } from './dto/create-abonnement.dto';
import { UpdateAbonnementDto } from './dto/update-abonnement.dto';
import { Abonnement } from './entities/abonnement.entity';

@Injectable()
export class AbonnementsService {
  
  constructor(
    @InjectModel(Abonnement)
    private userModel: typeof Abonnement,
  ) {}

  create(createAbonnementDto: CreateAbonnementDto) {
    return 'This action adds a new abonnement';
  }

  findAll() {
    return `This action returns all abonnements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} abonnement`;
  }

  update(id: number, updateAbonnementDto: UpdateAbonnementDto) {
    return `This action updates a #${id} abonnement`;
  }

  remove(id: number) {
    return `This action removes a #${id} abonnement`;
  }
}
