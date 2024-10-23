import { useFetch } from "../hooks/useFetch";

interface ProductsId {
  category_id: number;
}

export function useCategoriesApi(category_id: number): ProductsId[] {
  const { data: products } = useFetch(`products/category/${category_id}`);
  return products;
}
