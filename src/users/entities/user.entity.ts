import { Table, Column, Model, BelongsTo } from 'sequelize-typescript';
import { Abonnement } from '../../abonnements/entities/abonnement.entity';

@Table
export class User extends Model {

  @Column
  email: string;

  @Column
  password: string;
  
  @Column
  name: string;

  @Column
  role: string;

}