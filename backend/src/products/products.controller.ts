import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
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
  async getAll() {
    const result = await this.productsService.getAll();
    return result;
  }

  @Get('/limit')
  async getLimitedProductsAmount(@Query('a', ParseIntPipe) amount?: number) {
    const result = await this.productsService.getLimitedProductsAmount(amount);
    return result;
  }

  @Get('/chubidubi')
  async getProductsByCategoryId(
    @Query('category_id', ParseIntPipe) category_id: number,
  ) {
    return this.productsService.getProductsByCategoryId(category_id);
  }

  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getById(id);
  }

  @Get('/category/:category_id')
  getByCategoryId(@Param('category_id', ParseIntPipe) category_id: number) {
    return this.productsService.getProductsByCategoryId(category_id);
  }

  @Put('/:id')
  async update(
    @Body('id', ParseIntPipe) id: number,
    @Body() product: ProductDto,
  ) {
    return this.productsService.update(id, product);
  }

  @Delete('/:id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }

  @Delete('/all')
  async removeAll() {
    return this.productsService.removeAll();
  }
}
