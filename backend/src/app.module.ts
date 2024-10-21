import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProductsModule, CategoriesModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

