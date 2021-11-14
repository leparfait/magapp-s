import { Table, Column, Model, BelongsTo} from 'sequelize-typescript';
import { Abonnement } from '../../abonnements/entities/abonnement.entity';

@Table
export class TypeAbonnement extends Model {

  @Column
  name: string;

  @Column
  duree: number;
  
  @Column
  price: number

}

