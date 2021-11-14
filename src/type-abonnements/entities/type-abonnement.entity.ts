import { Table, Column, Model, HasMany, BelongsTo, BelongsToMany} from 'sequelize-typescript';
import { User } from '../../users/entities/user.entity';
import { Abonnement } from '../../abonnements/entities/abonnement.entity';

@Table
export class TypeAbonnement extends Model {

  @Column
  name: string;

  @Column
  duree: number;
  
  @Column
  price: number

  // @HasMany(() => Abonnement)
  // abonnements?: Abonnement[];

  @BelongsToMany(() => User, () => Abonnement)
  userSuscribe?: User[];

}

