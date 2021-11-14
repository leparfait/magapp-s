import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MagazinePayersService } from './magazine-payers.service';
import { CreateMagazinePayerDto } from './dto/create-magazine-payer.dto';
import { UpdateMagazinePayerDto } from './dto/update-magazine-payer.dto';

@Controller('magazine-payers')
export class MagazinePayersController {
  constructor(private readonly magazinePayersService: MagazinePayersService) {}

  @Post()
  create(@Body() createMagazinePayerDto: CreateMagazinePayerDto) {
    return this.magazinePayersService.create(createMagazinePayerDto);
  }

  @Get()
  findAll() {
    return this.magazinePayersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.magazinePayersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMagazinePayerDto: UpdateMagazinePayerDto) {
    return this.magazinePayersService.update(+id, updateMagazinePayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.magazinePayersService.remove(+id);
  }
}
