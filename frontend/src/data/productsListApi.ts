import { useFetch } from "../hooks/useFetch";

export function useCategoriesApi() {
  const { data: products } = useFetch("products");
  return products;
}
