import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Category } from '../../categories/entities/category.entity';

@Table
export class Magazine extends Model {

  @Column
  title: string;

  @Column
  description: string;
  
  @Column
  image: string;

  @Column
  file: string;

  @Column
  price: number;

  @ForeignKey(() => Category)
  @Column
  catId!: number;

  @BelongsTo(() => Category)
  categorie!: Category;

}
