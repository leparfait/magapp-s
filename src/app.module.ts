import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { DatabaseModule } from './database/database.module';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersModule } from './users/users.module';
import { MagazinesModule } from './magazines/magazines.module';
import { CategoriesModule } from './categories/categories.module';
import { AbonnementsModule } from './abonnements/abonnements.module';
import { TransactionsModule } from './transactions/transactions.module';
import { MagazinePayersModule } from './magazine-payers/magazine-payers.module';
import { TypeAbonnementsModule } from './type-abonnements/type-abonnements.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'magapp',
      models: [],
      autoLoadModels: true,
      synchronize: true,
    }),
    //DatabaseModule, 
    UsersModule,
    MagazinesModule, 
    CategoriesModule, 
    AbonnementsModule, 
    TransactionsModule, 
    MagazinePayersModule, 
    TypeAbonnementsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
