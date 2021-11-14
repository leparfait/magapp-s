import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTypeAbonnementDto } from './dto/create-type-abonnement.dto';
import { UpdateTypeAbonnementDto } from './dto/update-type-abonnement.dto';
import { TypeAbonnement } from './entities/type-abonnement.entity';

@Injectable()
export class TypeAbonnementsService {

  constructor(
    @InjectModel(TypeAbonnement)
    private typeabonnementModel: typeof TypeAbonnement,
  ) {}
s
  create(createTypeAbonnementDto: CreateTypeAbonnementDto) {
    return 'This action adds a new typeAbonnement';
  }

  findAll() {
    return `This action returns all typeAbonnements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeAbonnement`;
  }

  update(id: number, updateTypeAbonnementDto: UpdateTypeAbonnementDto) {
    return `This action updates a #${id} typeAbonnement`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeAbonnement`;
  }
}
