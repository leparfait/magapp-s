import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
  ) {}
  
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModel.create(createCategoryDto) ;
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.findAll();
  }

  findOne(id: number) {
    const user = this.categoryModel.findByPk(id)
    if(!user){
      throw new HttpException(
            'category id not found',
            HttpStatus.NOT_FOUND
      )
    }
    return user;
    // return `This action returns a #${id} category`;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryModel.findByPk(id)
    if(!category){
      throw new HttpException(
        'category id not found',
        HttpStatus.NOT_FOUND
     )
    }
    return await category.update(id,updateCategoryDto)
    // return `This action updates a #${id} category`;
  }

  async remove(id: number) {
    const category = await this.categoryModel.findByPk(id)
          await category.destroy();
          return category;
    // return `This action removes a #${id} category`;
  }
}
