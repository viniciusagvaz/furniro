import { Injectable } from '@nestjs/common';
import { CategoryDto } from 'src/dtos/categories.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.category.findMany({});
  }

  async findById(id: number) {
    return await this.prisma.category.findUnique({
      where: { id },
    });
  }

  async create(category: CategoryDto) {
    const createdCategory = await this.prisma.category.create({
      data: {
        name: category.name,
        image_link: category.image_link,
      },
    });
    return createdCategory;
  }

  async update(id: number, category: CategoryDto) {
    const updatedCategory = await this.prisma.category.update({
      where: { id: id },
      data: {
        name: category.name,
        image_link: category.image_link,
      },
    });

    return updatedCategory;
  }

  async remove(id: number) {
    return await this.prisma.category.delete({
      where: { id: id },
    });
  }

  async removeAll() {
    return await this.prisma.category.deleteMany({});
  }
}
