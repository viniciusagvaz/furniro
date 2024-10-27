import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dtos/products.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProductDto } from 'src/dtos/update_product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProducts(limit: number, page: number) {
    const skip = (page - 1) * limit;

    const [products, totalProducts] = await Promise.all([
      this.prisma.product.findMany({
        skip,
        take: limit,
        orderBy: { updated_date: 'desc' },
        include: { category: { select: { name: true, updated_date: true } } },
      }),
      this.prisma.product.count(),
    ]);

    const pages = Math.ceil(totalProducts / limit);

    return { products, pages, limit, totalProducts };
  }

  async getAllProductsByCategory(
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
        orderBy: [
          {
            updated_date: 'desc',
          }
        ],
      }),

      this.prisma.product.count({
        where: { category_id },
      }),
    ]);

    const pages = Math.ceil(totalProducts / limit);
    return { products, pages, limit, totalProducts };
  }

  async getProductById(category_id: number) {
    return this.prisma.product.findMany({
      where: { category_id }, //seleciona por id
      include: {
        //inclui as categorias
        category: { select: { id: true, name: true, updated_date: true } }, // seleciona o id e o name
      },
    });
  }

  async getSpecificProduct(name: string, limit: number, page: number) {
    const { category_id } = await this.prisma.product.findFirst({
      where: { name },
      select: { category_id: true },
    });

    const product = await this.prisma.product.findFirst({
      where: { name, category_id },

      include: { category: true },
    });

    const relatedProducts = await this.prisma.product.findMany({
      where: { category_id, id: { not: product.id } },
      take: limit,
      skip: (page - 1) * limit,
    });

    return { product, relatedProducts };
  }

  async create(products: ProductDto) {
    const createdProduct = await this.prisma.product.create({
      data: products,
    });

    return createdProduct;
  }

  async remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }

  async removeAll() {
    return this.prisma.product.deleteMany({});
  }

  async update(id: number, products: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: products,
    });
  }
}
