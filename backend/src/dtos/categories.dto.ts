import { IsString } from 'class-validator';

export class CategoryDto {
  @IsString()
  name: string;

  @IsString()
  image_link: string;
}
