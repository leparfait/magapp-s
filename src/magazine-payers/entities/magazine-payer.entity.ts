import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../../users/entities/user.entity';
import { Magazine } from '../../magazines/entities/magazine.entity';

@Table
export class MagazinePayer extends Model {

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => Magazine)
  @Column
  magazineId: number;

  @BelongsTo(() => Magazine)
  magazine!: Magazine;
  
  @Column
  datePaiement: Date;

}
