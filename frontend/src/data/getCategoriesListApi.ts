import { useFetch } from "../hooks/useFetch";

export function useGetCategories() {
  const { data: categories, loading, error } = useFetch("category");

  return { categories, loading, error };
}
