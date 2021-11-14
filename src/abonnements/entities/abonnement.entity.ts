import { Table, Column, Model, ForeignKey, CreatedAt} from 'sequelize-typescript';
import { TypeAbonnement } from '../../type-abonnements/entities/type-abonnement.entity';
import { User } from '../../users/entities/user.entity';

@Table
export class Abonnement extends Model {

  @ForeignKey(() => User)
  @Column
  idUser: number;

  @ForeignKey(() => TypeAbonnement)
  @Column
  idType: number;

  @CreatedAt
  @Column 
  start : Date;
 
  @Column
  end : Date;

  // @BelongsTo(() => User)
  // user?: User;

  // @BelongsTo(() => TypeAbonnement)
  // typeAbonnement ?: TypeAbonnement;

}