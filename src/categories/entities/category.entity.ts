import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Magazine } from 'src/magazines/entities/magazine.entity';

@Table
export class Category extends Model {

    @Column
    name!: string;
  
    @Column
    description!: string;
  
    @Column
    image!: string;
  
    @HasMany(() => Magazine)
    magazine?: Magazine[];
}