import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dtos/products.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProductDto } from 'src/dtos/update_product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(
    limit: number, 
    page: number,
    sort: 'asc' | 'desc',
    sort_by: 'price',
  ) {
    const skip = (page - 1) * limit;

    const [products, totalProducts] = await Promise.all([
      this.prisma.product.findMany({
        skip,
        take: limit,
        orderBy: {
          [sort_by]: sort,
        },
        include: { category: true },
      }),
      this.prisma.product.count(),
    ]);

    const pages = Math.ceil(totalProducts / limit);

    return { products, pages, limit, totalProducts };
  }

  async getById(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  async getByCategoryId(category_id: number) {
    return this.prisma.product.findMany({
      where: { category_id },
      include: { category: true },
    });
  }

  async paginate(
    limit: number,
    page: number,
    sort: 'asc' | 'desc',
    sort_by: 'price' | 'discount_price',
  ) {
    const skip = (page - 1) * limit;

    const [products, totalCount] = await Promise.all([
      this.prisma.product.findMany({
        skip,
        take: limit,
        orderBy: {
          [sort_by]: sort,
        },
        include: { category: true },
      }),
      this.prisma.product.count(),
    ]);
    const totalProducts = totalCount;

    return { products, page, limit, totalProducts };
  }

  async paginateByCategory(limit: number, page: number, category_id: number) {
    const skip = (page - 1) * limit;
    return this.prisma.product.findMany({
      skip,
      take: limit,
      where: { category_id },
      include: { category: true },
    });
  }

  async sortByPrice(order_by: 'asc' | 'desc') {
    return this.prisma.product.findMany({
      orderBy: { price: order_by },
      include: { category: true },
    });
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

  async update(id: number, products: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: products,
    });
  }

  // async getProducts(
  //   // Ideal for limiting the amount of products and pagination
  //   // GET /products?limit={limit}&page={page}
  //   order_by?: 'asc' | 'desc',
  //   page?: number,
  //   limit?: number,
  // ) {
  //   const skip = (page - 1) * limit;

  //   const products = await this.prisma.product.findMany({
  //     skip,
  //     take: limit,
  //     include: { category: true },
  //   });

  //   // Ideal for sorting limited products per page by price
  //   // GET /products?limit={limit}&page={page}&order_by={order_by}

  //   const productsOrderByPrice = await this.prisma.product.findMany({
  //     skip,
  //     take: limit,
  //     include: { category: true },
  //     orderBy: { price: order_by }
  //   });
  //   console.log(productsOrderByPrice)
  //   return  productsOrderByPrice;
  // }

  // async getProductByName(name: string) {
  //   // For getting product by name
  //   // GET /products?name=product_name
  //   const product = await this.prisma.product.findMany({
  //     where: { name: name },
  //     include: { category: true },
  //   });

  //   // For getting product by name and it's related products
  //   // GET /products?name=product_name&related=true
  //   const relatedProducts = await this.prisma.product.findMany({
  //     where: {
  //       category_id: { in: product.map((p) => p.category_id) },
  //       NOT: [{ name: name }],
  //     },
  //     take: 4,
  //   });

  //   return { product, relatedProducts };
  // }

  // async getProductById(id: number) {
  //   return this.prisma.product.findUnique({
  //     where: { id: id },
  //   });
  // }

  // async getLimitedProductsAmount(limit?: number) {
  //   const result = await this.prisma.product.findMany();
  //   const limitedResult = result.slice(0, limit);

  //   if (!limit) {
  //     return result;
  //   }

  //   return limitedResult;
  // }

  // async getProductsByCategoryId(category_id: number) {
  //   // For getting products by category
  //   // GET /products?category_id={category_id}
  //   return this.prisma.product.findMany({
  //     where: { category_id },
  //     include: { category: true },
  //   });
  // }

  // async remove(id: number) {
  //   return this.prisma.product.delete({
  //     where: { id: id },
  //   });
  // }

  // async removeAll() {
  //   return this.prisma.product.deleteMany({});
  // }

  // async update(id: number, product: UpdateProductDto) {
  //   const updatedProduct = await this.prisma.product.update({
  //     where: { id: parseInt(`${id}`) },
  //     data: {
  //       id,
  //     },
  //   });

  //   return updatedProduct;
  // }
}

// async getProductsPerPage(
//   name?: string,
//   category_id?: number,
//   order_by?: string,
//   page?: number,
//   limit?: number,
// ) {

//   const products = await this.prisma.product.findMany({

//   });

//   if (limit) {
//     return products.slice(0, limit);

//   }

//   if (name) {
//     return products.filter((product) =>
//       product.name.toLowerCase().includes(name.toLowerCase()),
//     );
//   }

//   if (category_id) {
//     return products.filter((product) => product.category_id === category_id);
//   }

//   if (order_by) {
//     return products.sort((a, b) => {
//       if (order_by === 'ASC') {
//         return Number(a.price) - Number(b.price);
//       }
//       if (order_by === 'DESC') {
//         return Number(b.price) - Number(a.price);
//       }
//     });
//   }

//   return products;
// }
