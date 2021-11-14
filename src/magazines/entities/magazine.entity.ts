import { Table, Column, Model, ForeignKey, BelongsTo, HasMany, BelongsToMany } from 'sequelize-typescript';
import { MagazinePayer } from '../../magazine-payers/entities/magazine-payer.entity';
import { Category } from '../../categories/entities/category.entity';
import { User } from 'src/users/entities/user.entity';

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

  @BelongsToMany(() => User, () => MagazinePayer)
  usersBuyer?: User[];

}
