import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from 'src/dtos/products.dto';
import { Product } from '@prisma/client';

@Controller('products') 
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() product: ProductDto) {
    return this.productsService.create(product);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.productsService.findById(id); 
  }

  @Get('/category/:id')
  findByCategoryId(@Param('id') id: number) {
    return this.productsService.findByCategoryId(id);
  }

  @Put('/:id/update')
  async update(@Body('id') id:number, @Body() product: ProductDto) {
    return this.productsService.update(id, product);
  }
 
 
  @Delete('/:id/delete')
  async remove(@Param('id') id: number): Promise<Product> {
    return this.productsService.remove(id);
  }

  @Delete()
  async removeAll() {
    return this.productsService.removeAll();
  }
  
  @Get('/byname/:name')
  async findByName(@Param('name') name: string) {
    return this.productsService.findByName(name);
  }
}
