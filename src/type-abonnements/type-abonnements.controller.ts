import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeAbonnementsService } from './type-abonnements.service';
import { CreateTypeAbonnementDto } from './dto/create-type-abonnement.dto';
import { UpdateTypeAbonnementDto } from './dto/update-type-abonnement.dto';

@Controller('type-abonnements')
export class TypeAbonnementsController {
  
  constructor(private readonly typeAbonnementsService: TypeAbonnementsService) {}

  @Post()
  create(@Body() createTypeAbonnementDto: CreateTypeAbonnementDto) {
    return this.typeAbonnementsService.create(createTypeAbonnementDto);
  }

  @Get()
  findAll() {
    return this.typeAbonnementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeAbonnementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeAbonnementDto: UpdateTypeAbonnementDto) {
    return this.typeAbonnementsService.update(+id, updateTypeAbonnementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeAbonnementsService.remove(+id);
  }
}
