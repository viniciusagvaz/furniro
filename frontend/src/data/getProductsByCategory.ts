import { useFetch } from "../hooks/useFetch";


export function useGetProductsByCategory(category_id: number){
  const { data: products } = useFetch(`products/category/${category_id}`);

  return products;
}
