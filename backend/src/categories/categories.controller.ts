import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto } from 'src/dtos/categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() category: CategoryDto) {
    return this.categoriesService.create(category);
  }

  @Get()
  async getAll() {
    return this.categoriesService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.getById(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() category: CategoryDto,
  ) {
    return this.categoriesService.update(id, category);
  }

  @Patch(':id')
  async patch(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CategoryDto,
  ) {
    return this.categoriesService.patch(id, data);
  }

  @Delete(':id/delete')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.remove(id);
  }

  @Delete()
  async removeAll() {
    return this.categoriesService.removeAll();
  }
}
