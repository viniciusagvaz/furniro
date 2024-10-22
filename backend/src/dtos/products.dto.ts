import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
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

  @IsPositive()
  @IsNumber()
  price: number

  @IsOptional()
  @IsPositive()
  @IsNumber()
  discount_price: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  discount_percent: number;

  @IsOptional()
  @IsBoolean()
  is_new: boolean;

  @IsString()
  image_link: string;

  @IsArray()
  @IsString({ each: true })
  other_image_link: string[];

  @IsString()
  category: string;
}

