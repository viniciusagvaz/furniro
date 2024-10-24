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
  async getAll(
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
    @Query('order') order?: string,
    @Query('order_by') order_by?: 'ASC' | 'DESC',
    @Query('category_id') category_id?: number,
  ) {
    const products = await this.productsService.getAll(
      limit,
      offset,
      order,
      order_by,
      category_id,
    );
    return products;
  }

  @Get('/list')
  async getLimitedProductsAmount(
    @Query('limit', ParseIntPipe) amount?: number,
  ) {
    const result = await this.productsService.getLimitedProductsAmount(amount);
    return result;
  }

  @Get()
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
