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
import { QueryProductsDto } from 'src/dtos/queries.dto';
import { UpdateProductDto } from 'src/dtos/update_product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  async create(@Body() body: ProductDto) {
    return await this.productsService.create(body);
  }

  @Delete('/:id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.productsService.remove(id);
  }

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProductDto,
  ) {
    return await this.productsService.update(id, body);
  }

  @Get()
  async getAllProducts(@Query() query: QueryProductsDto) {
    const { limit, page } = query;
    return await this.productsService.getAllProducts(
      Number(limit),
      Number(page),
    );
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.productsService.getById(id);
  }

  @Get('/name/:name')
  async getSpecificProducts(@Query() param: QueryProductsDto) {
    const { name, limit, page } = param;
    return await this.productsService.getSpecificProduct(
      name,
      Number(limit),
      Number(page),
    );
  }

  @Get('/category/:category_id')
  async getByCategoryId(
    @Param('category_id', ParseIntPipe) category_id: number,
  ) {
    return await this.productsService.getByCategoryId(category_id);
  }
}
