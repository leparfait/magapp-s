import { PartialType } from '@nestjs/mapped-types';
import { CreateMagazinePayerDto } from './create-magazine-payer.dto';

export class UpdateMagazinePayerDto extends PartialType(CreateMagazinePayerDto) {}
