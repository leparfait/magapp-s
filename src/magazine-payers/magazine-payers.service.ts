import { Injectable } from '@nestjs/common';
import { CreateMagazinePayerDto } from './dto/create-magazine-payer.dto';
import { UpdateMagazinePayerDto } from './dto/update-magazine-payer.dto';

@Injectable()
export class MagazinePayersService {
  create(createMagazinePayerDto: CreateMagazinePayerDto) {
    return 'This action adds a new magazinePayer';
  }

  findAll() {
    return `This action returns all magazinePayers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} magazinePayer`;
  }

  update(id: number, updateMagazinePayerDto: UpdateMagazinePayerDto) {
    return `This action updates a #${id} magazinePayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} magazinePayer`;
  }
}
