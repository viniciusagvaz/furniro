import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dtos/products.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProductDto } from 'src/dtos/update_product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProducts(
    limit: number,
    page: number,
    sort?: string,
    sort_by?: string,
  ) {
    const skip = (page - 1) * limit;

    const [products, totalProducts] = await Promise.all([
      this.prisma.product.findMany({
        skip,
        take: limit,
        orderBy: { [sort_by]: sort },
        select: {
          id: true,
          category_id: true,
          name: true,
          description: true,
          price: true,
          discount_price: true,
          discount_percent: true,
          is_new: true,
          image_link: true,
          updated_date: true,
        },
      }),
      this.prisma.product.count(),
    ]);

    const pages = Math.ceil(totalProducts / limit);

    return { products, pages, limit, totalProducts };
  }

  async getProductsFromSpecificCategory(
    limit: number,
    page: number,
    category_id: number,
    sort?: string,
    sort_by?: string,
  ) {
    const skip = (page - 1) * limit;

    const [products, totalProducts] = await Promise.all([
      this.prisma.product.findMany({
        where: { category_id },
        skip,
        take: limit,
        orderBy: { updated_date: 'asc' },
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          discount_price: true,
          discount_percent: true,
          image_link: true,
          updated_date: true,
        },
      }),

      this.prisma.product.count({
        where: { category_id },
      }),
    ]);

    const pages = Math.ceil(totalProducts / limit);
    return { products, pages, limit, totalProducts };
  }

  async getSpecificProductAndItsRelateds(
    name: string,
    limit: number,
    page: number,
  ) {
    const { category_id } = await this.prisma.product.findFirst({
      where: { name },
      select: { category_id: true },
    });

    const product = await this.prisma.product.findFirst({
      where: { name, category_id },

      include: { category: { select: { name: true, updated_date: true } } },
    });

    const relatedProducts = await this.prisma.product.findMany({
      where: { category_id, id: { not: product.id } },
      take: limit,
      skip: (page - 1) * limit,
      select: {
        id: true,
        name: true,
        image_link: true,
        description: true,
        price: true,
        discount_price: true,
        discount_percent: true,
        is_new: true,
      },
    });

    return { product, relatedProducts };
  }

  async createOneProductAtATime(products: ProductDto) {
    const createdProduct = await this.prisma.product.create({
      data: products,
    });

    return createdProduct;
  }

  async createManyProductsAtOnce(products: ProductDto[]) {
    const createdProducts = await this.prisma.product.createMany({
      data: products,
    });

    return createdProducts;
  }

  async remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }

  async update(id: number, products: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: products,
    });
  }
}
