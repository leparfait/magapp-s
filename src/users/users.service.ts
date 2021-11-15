import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  googleLogin(req){
    if (!req.user) {
      return 'No user from google'
    }
    const alreadyUser  = this.userModel.findOne<User>({
      where: { email : req.user.email },
    });
    if(!alreadyUser){
        const userGoogle  = new User()
        userGoogle.email = req.user.email
        userGoogle.name = req.user.firstName+" "+req.user.lastName
        userGoogle.password = req.user.email+"123"
        userGoogle.photo = req.user.picture
        userGoogle.role = 'user'
        const data = userGoogle.save()
        return data
    }else{
      throw new HttpException(
        'User already exist',
         HttpStatus.OK,
      );
    }
    // return {
    //   message: 'User Info from Google',
    //   user: req.user
    // }
  }

  create(createUserDto: CreateUserDto) {
    // return this.userModel.create<User>(createUserDto) ;
      try {
        const user = new User();
        user.email = createUserDto.email.trim().toLowerCase();
        user.name = createUserDto.name;
        user.password = createUserDto.password;
        user.role = createUserDto.role;

        // const salt = await genSalt(10);
        // user.password = await hash(createUserDto.password, salt);

        // const userData = await user.save();

        // // when registering then log user in automatically by returning a token
        // const token = await this.signToken(userData);
        // return new UserLoginResponseDto(userData, token);
        return this.userModel.create<User>(user) ;

    } catch (err) {
        if (err.original.constraint === 'user_email_key') {
            throw new HttpException(
                `User with email '${err.errors[0].value}' already exists`,
                HttpStatus.CONFLICT,
            );
        }

        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<User[]> {
    return  await this.userModel.findAll();
  }

  async findOne(id: number) { 
    const user =  await this.userModel.findByPk(id);
    if (!user) {
      throw new HttpException(
          'User with given id not found',
          HttpStatus.NOT_FOUND,
      );
  }
  return new UserDto(user)
  //`This action returns a #${id} user`;
  }

  async getUserByEmail(email: string) {
    return await this.userModel.findOne<User>({
        where: { email },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {

    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
    }
    user.name = updateUserDto.name || user.name;
    user.role = updateUserDto.role || user.role;

    try {
        const data = await user.save();
        return new UserDto(data);
     } catch (err) {
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    // await user.update(id,updateUserDto)
    //return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    // return `This action removes a #${id} user`;
    const user = await this.userModel.findByPk(id);
    await user.destroy();
    return new UserDto(user);
  }
} 
