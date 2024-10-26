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
  sort?: string;

  @IsOptional()
  @IsString()
  sort_by?: string;

  @IsOptional()
  @IsNumberString()
  page?: string;

  @IsOptional()
  @IsNumberString()
  limit?: string | 4;
}
