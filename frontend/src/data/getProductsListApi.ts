import { useFetch } from "../hooks/useFetch";

export function useGetAllProducts() {
  const { data: products } = useFetch("products");
  return products;
}
