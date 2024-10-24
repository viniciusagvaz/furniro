import { useFetch } from "../hooks/useFetch";

export function useGetCategories() {
  const { data: categories, loading, error } = useFetch("categories");

  return { categories, loading, error };
}
