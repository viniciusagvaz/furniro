import { useFetch } from "../hooks/useFetch";

export function useGetCategories(){
  const { data, loading } = useFetch("category");

  return { data, loading };
}
