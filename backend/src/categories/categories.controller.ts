import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto } from 'src/dtos/categories.dto';

@Controller('category')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.categoriesService.findById(id);
  }

  @Post()
  async create(@Body() category: CategoryDto) {
    return this.categoriesService.create(category);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() category: CategoryDto) {
    return this.categoriesService.update(id, category);
  }

  @Delete(':id/delete')
  async remove(@Param('id') id: number) {
    return this.categoriesService.remove(id);
  }

  @Delete()
  async removeAll() {
    return this.categoriesService.removeAll();
  }
}
