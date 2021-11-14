import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userModel.create<User>(createUserDto) ;
  }

  async findAll(): Promise<User[]> {
    return  this.userModel.findAll();
  }

  findOne(id: number) { 
    return this.userModel.findByPk(id);
     //`This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
    //this.usersRepository.update<User>(updateUserDto,id)
    
  }

  async remove(id: number) {
    // return `This action removes a #${id} user`;
    const user = await this.findOne(id);
    await user.destroy();
  }
}
