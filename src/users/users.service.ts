import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create<User>(createUserDto) ;
  }

  async findAll(): Promise<any> {
    return 'all user here'; //this.usersRepository.findAll<User>();
  }

  findOne(id: number) { 
    return this.usersRepository.findByPk<User>(id);
     //`This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
    //this.usersRepository.update<User>(updateUserDto,id)
    
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
