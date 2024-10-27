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

  @Get()
  async getAllProducts(@Query() query: QueryProductsDto) {
    const { limit, page } = query;
    return await this.productsService.getAllProducts(
      Number(limit),
      Number(page),
    );
  }

  @Get('/category/:category_id')
  async getAllProductsByCategory(
    @Param('category_id', ParseIntPipe) category_id: number,
    @Query() query: QueryProductsDto,
  ) {
    const { limit, page } = query;
    return await this.productsService.getAllProductsByCategory(
      Number(limit),
      Number(page),
      category_id,
    );
  }

  @Get('/:name')
  async getSpecificProductAndItsRelateds(
    @Param('name') name: string,
    @Query() query: QueryProductsDto,
  ) {
    const { limit, page } = query;
    return await this.productsService.getSpecificProductAndItsRelateds(
      name,
      Number(limit),
      Number(page),
    );
  }

  @Get('/:category_id')
  async getProductById(
    @Param('category_id', ParseIntPipe) category_id: number,
  ) {
    return await this.productsService.getProductById(category_id);
  }

  @Post()
  async create(@Body() body: ProductDto) {
    return await this.productsService.create(body);
  }

  @Post('createMany')
  async createMany(@Body() body: ProductDto[]) {
    return await this.productsService.createMany(body);
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
}
