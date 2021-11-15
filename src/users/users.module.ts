import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
//import { DatabaseModule } from 'src/database/database.module';
// import { usersProviders } from './entities/user.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService,GoogleStrategy]
})
export class UsersModule {}
