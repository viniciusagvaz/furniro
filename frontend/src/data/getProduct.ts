import { useFetch } from "../hooks/useFetch";

export function useGetProductById(id: number) {
  const { data: product } = useFetch(`products/${id}`);

  return product;
}
