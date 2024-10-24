import { useFetch } from "../hooks/useFetch";

export function useGetProductById(id: number) {
  const { data: product, loading, error } = useFetch(`products/${id}`);


  return {product, loading, error};	
}
