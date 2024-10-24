import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dtos/products.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '@prisma/client';
import { UpdateProductDto } from 'src/dtos/update_product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create({
    name,
    sku,
    category_id,
    description,
    large_description,
    price,
    discount_price,
    discount_percent,
    is_new,
    image_link,
    other_image_link,
  }: ProductDto) {
    const createdProduct = await this.prisma.product.create({
      data: {
        name,
        sku,
        description,
        large_description,
        price,
        discount_price,
        discount_percent,
        is_new,
        image_link,
        other_image_link,
        category: {
          connect: {
            id: category_id,
          },
        },
      },
    });

    return createdProduct;
  }

  async getAll(
    limit?: number,
    offset?: number,
    order?: string,
    order_by?: 'ASC' | 'DESC',
    category_id?: number,
  ) {
    const result = await this.prisma.product.findMany({
      include: {
        category: true,
      },
    });

    if (limit && offset) {
      return result.slice(offset, limit);
    }

    if (order && order_by) {
      return result.sort((a, b) => {
        if (order_by === 'ASC') {
          return a[order] - b[order];
        } else {
          return b[order] - a[order];
        }
      });
    }

    if (category_id) {
      return result.filter((product) => product.category_id === category_id);
    }
    
    if (limit) {
      return result.slice(0, limit);
    }

    return result;
  }

  async getById(id: number) {
    return this.prisma.product.findUnique({
      where: { id: id },
    });
  }

  async getLimitedProductsAmount(limit?: number) {
    const result = await this.prisma.product.findMany();
    const limitedResult = result.slice(0, limit);

    if (!limit) {
      return result;
    }

    return limitedResult;
  }

  async getProductsByCategoryId(categoryId: number) {
    return this.prisma.product.findMany({
      where: { category_id: categoryId },
      include: { category: true },
    });
  }

  async remove(id: number) {
    return this.prisma.product.delete({
      where: { id: id },
    });
  }

  async removeAll() {
    return this.prisma.product.deleteMany({});
  }

  async update(id: number, product: UpdateProductDto) {
    const updatedProduct = await this.prisma.product.update({
      where: { id: parseInt(`${id}`) },
      data: {
        id,
      },
    });

    return updatedProduct;
  }
}
