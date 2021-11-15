import { Table, Column, Model, BelongsToMany, HasMany, IsEmail, Unique, DataType } from 'sequelize-typescript';
import { MagazinePayer } from '../../magazine-payers/entities/magazine-payer.entity';
import { Abonnement } from '../../abonnements/entities/abonnement.entity';
import { Magazine } from '../../magazines/entities/magazine.entity';
import { TypeAbonnement } from '../../type-abonnements/entities/type-abonnement.entity';
import { Transaction } from '../../transactions/entities/transaction.entity';

@Table
export class User extends Model {

  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @IsEmail
  @Unique
  @Column
  email: string;

  @Column
  password: string;
  
  @Column
  name: string;

  @Column
  photo: string;

  @Column
  role: string;

  @BelongsToMany(() => Magazine, () => MagazinePayer)
  magazinePayers?: Magazine[];

  @BelongsToMany(() => TypeAbonnement, () => Abonnement)
  abonnement?: Abonnement[];

  @HasMany(() => Transaction)
  transactions?: Transaction[];

}