import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { MagazinesModule } from './magazines/magazines.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [DatabaseModule, UsersModule, MagazinesModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
