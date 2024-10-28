import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsString,
} from 'class-validator';

export class ProductDto {
  @IsString()
  name: string;

  @IsString()
  sku: string;

  @IsNumber()
  category_id: number;

  @IsString()
  description: string;

  @IsString()
  large_description: string;

  @IsNumber()
  price: number

  @IsNumber()
  discount_price: number;

  @IsNumber()
  discount_percent: number;

  @IsBoolean()
  is_new: boolean;

  @IsString()
  image_link: string;

  @IsArray()
  @IsString({ each: true })
  other_image_link: string[];

}

