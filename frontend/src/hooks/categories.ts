import axios from "axios";
import { useQuery } from "react-query";

export function useCategories() {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery("categories", () =>
    axios
      .get("http://localhost:3000/categories")
      .then((response) => response.data)
  );

  return { categories, isLoading, isError };
}
