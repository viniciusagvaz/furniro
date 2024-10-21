// import { Test, TestingModule } from '@nestjs/testing';
// import { ProductsService } from '../src/products/products.service';
// import { PrismaService } from '../../prisma/prisma.service';
// import { ProductDto } from '../../dtos/products.dto';
// import { Decimal } from '@prisma/client/runtime/library';

// describe('ProductsService', () => {
//   let productsService: ProductsService;
//   let prismaService: PrismaService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [ProductsService, PrismaService],
//     }).compile();

//     productsService = module.get<ProductsService>(ProductsService);
//     prismaService = module.get<PrismaService>(PrismaService);
//   });

//   it('should create a new product', async () => {
//     const productDto: ProductDto = {
//       name: 'Test Product',
//       sku: 'TEST-001',
//       category_id: 1,
//       description: 'This is a test product',
//       large_description: 'This is a large description for the test product',
//       price: new Decimal(1100.0),
//       discount_price: new Decimal(1000.0),
//       discount_percent: new Decimal(10.0),
//       is_new: true,
//       image_link: 'https://example.com/image.jpg',
//       other_image_link: [
//         'https://example.com/image1.jpg',
//         'https://example.com/image2.jpg',
//       ],
//     };

//     const createdProduct = await productsService.create({
//       ...productDto,
//       price: productDto.price.toNumber(),
//       discount_price: productDto.discount_price.toNumber(),
//       discount_percent: productDto.discount_percent.toNumber(),
//     });
//     expect(createdProduct).toBeDefined();
//   });
// });
