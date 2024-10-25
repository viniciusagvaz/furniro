import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
 
export class QueryProductsDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumberString()
  category_id?: string;

  @IsOptional()
  @IsString()
  sort?: 'asc' | 'desc';

  @IsOptional()
  @IsString()
  sort_by?: 'price';

  @IsOptional()
  @IsNumberString()
  page?: string;

  @IsOptional()
  @IsNumberString()
  limit?: string | 4;
}
