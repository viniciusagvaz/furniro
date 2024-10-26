import axios from "axios";
import { useQuery } from "react-query";
import { api } from "../services/api";

export function useProducts(queries) {
  const baseUrl = `${api.defaults.baseURL}/products`;
  
  const { data, isLoading, isError } = useQuery(
    ["products", queries],  
    () =>
      axios
        .get(baseUrl, { params: queries })
        .then((response) => response.data),
  )
  return { data, isLoading, isError };
}

