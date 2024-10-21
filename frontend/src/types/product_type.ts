export type Product = {
  id: number;
  name: string;
  sku: string;
  category_id: number;
  description: string;
  large_description: number;
  price: number;
  discount_price: number;
  discount_percent: number;
  is_new: boolean;
  image_link: string;
  other_image_link: string;
  created_date: Date;
  updated_date: Date;
};
