import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ProductsQueriesDto {
  @IsNumber()
  @IsOptional()
  limit?:string

  @IsNumber()
  @IsOptional()
  page?:string

  @IsString()
  @IsOptional()
  orderBy?:string
}
