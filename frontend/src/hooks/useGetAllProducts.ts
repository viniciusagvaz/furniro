import { useFetch } from "../hooks/useFetch";

export function useGetAllProducts() {
  const { data: products, loading, error } = useFetch("products");
  return { products, loading, error };
}
