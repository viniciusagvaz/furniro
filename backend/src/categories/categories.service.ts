import { Injectable } from '@nestjs/common';
import { CategoryDto } from 'src/dtos/categories.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.category.findMany({
      include: { product: true },
      orderBy: { id: 'asc' },
    });
  }

  async getById(id: number) {
    return await this.prisma.category.findUnique({
      where: { id },
    });
  }

  async getCategoryImageAndNameById(category_id: number) {
    return await this.prisma.category.findUnique({
      where: { id: category_id },
      select: { id: true, image_link: true, name: true },
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

  async patch(id: number, data: CategoryDto) {
    const updatedCategory = await this.prisma.category.update({
      data: data,
      where: { id: id },
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
