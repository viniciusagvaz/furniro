import { Category } from "./categories_interface";

export interface Product {
  id: number;
  name: string;
  sku: string | null;
  category_id?: number;
  description: string | null;
  large_description: string | null;
  price: number ;
  discount_price: number | null;
  discount_percent: number | null;
  is_new: boolean;
  image_link: string | null;
  other_image_link?: string[];
  category: Category[] | null;
}
