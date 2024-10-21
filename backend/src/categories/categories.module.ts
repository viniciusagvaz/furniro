import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoriesController } from './categories.controller';
import { CategoryDto } from 'src/dtos/categories.dto';


@Module({
  imports: [PrismaModule],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {
  create(category: CategoryDto) {
    throw new Error('Method not implemented.');
  }
}
