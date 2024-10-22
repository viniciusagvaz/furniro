import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dtos/products.dto';

import { PrismaService } from '../prisma/prisma.service';
import { Product } from '@prisma/client';

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

  async findAll() {
    return this.prisma.product.findMany({});
  }

  async findById(id: number) {
    return this.prisma.product.findUnique({
      where: { id: parseInt(`${id}`) },
    });
  }

  async findByCategoryId(id: number) {
    return this.prisma.product.findMany({
      where: {
        category_id: parseInt(`${id}`),
      },
      include: {
        category: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.product.delete({
      where: { id: parseInt(`${id}`) },
    });
  }

  async removeAll() {
    return this.prisma.product.deleteMany({});
  }

  async update(id: number, product: ProductDto) {
    const updatedProduct = await this.prisma.product.update({
      where: { id: parseInt(`${id}`) },
      data: {
        name: product.name,
        sku: product.sku,
        category_id: product.category_id,
        description: product.description,
        large_description: product.large_description,
        price: product.price,
        discount_price: product.discount_price,
        discount_percent: product.discount_percent,
        is_new: product.is_new,
        image_link: product.image_link,
        other_image_link: product.other_image_link,
      },
    });

    return updatedProduct;
  }

  async findByName(name: string) {
    return this.prisma.product.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }
}
