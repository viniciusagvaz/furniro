import { useFetch } from "../hooks/useFetch";

export function useCategoriesApi() {
  const { data: categoriesList } = useFetch("category");
  return categoriesList;
}
