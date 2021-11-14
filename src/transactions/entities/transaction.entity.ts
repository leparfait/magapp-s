import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../../users/entities/user.entity';

@Table
export class Transaction extends Model {

  @ForeignKey(()=>User)
  @Column
  userId: number;

  @Column
  reference: string;
  
  @Column
  service: string;

  @Column
  amount: string;

  @BelongsTo(() => User)
  User?: User;

}