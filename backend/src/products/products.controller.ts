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
  async getAll(@Query() query: QueryProductsDto) {
    const { limit, page, sort, sort_by } = query;
    return await this.productsService.getAll(
      Number(limit),
      Number(page),
      sort,
      sort_by,
    );
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.productsService.getById(id);
  }

  @Get('/category/:category_id')
  async getByCategoryId(
    @Param('category_id', ParseIntPipe) category_id: number,
  ) {
    return await this.productsService.getByCategoryId(category_id);
  }
 
  @Get('/category/:category_id/:page/:limit')
  async paginateByCategory(@Query() query: QueryProductsDto) {
    return await this.productsService.paginateByCategory(
      Number(query.limit),
      Number(query.page),
      Number(query.category_id),
    );
  }

  @Get()
  async paginate(@Query() query: QueryProductsDto) {
    return await this.productsService.paginate(
      Number(query.limit),
      Number(query.page),
      query.sort,
      query.sort_by,
    );
  }
}

//   @Get(':page/:limit')
//   async getProducts(@Param() query: QueryProductsDto) {
//     const searchedProducts = await this.productsService.getProducts(
//       query.order_by,
//       Number(query.page),
//       Number(query.limit),
//     );

//     return searchedProducts;
//   }

//   @Get('/:name')
//   async getProductByName(@Param('name') name: string) {
//     return this.productsService.getProductByName(name);
//   }

//   //Selecionar um ou outra
//   @Get()
//   async getProductsByCategoryId(
//     @Query('category_id', ParseIntPipe) category_id: number,
//   ) {
//     return this.productsService.getProductsByCategoryId(category_id);
//   }

//   @Get('/category/:category_id')
//   getByCategoryId(@Param('category_id', ParseIntPipe) category_id: number) {
//     return this.productsService.getProductsByCategoryId(category_id);
//   }

//   @Delete('/:id')
//   async remove(@Param('id', ParseIntPipe) id: number) {
//     return this.productsService.remove(id);
//   }

//   @Delete()
//   async removeAll() {
//     return this.productsService.removeAll();
//   }

//   @Put('/:id')
//   async update(
//     @Body('id', ParseIntPipe) id: number,
//     @Body() product: ProductDto,
//   ) {
//     return this.productsService.update(id, product);
//   }

//   @Post()
//   async create(@Body() product: ProductDto) {
//     return this.productsService.create(product);
//   }
// }
