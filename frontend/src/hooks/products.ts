import axios from "axios";
import { useQuery } from "react-query";
import { api } from "../services/api";

export function useProducts(queries) {
  const endpoint = queries.name ? `/name/${queries.name}` : '';
  const baseUrl = `${api.defaults.baseURL}/products${endpoint}`;
  
  const { data, isLoading, isError } = useQuery(
    ["products", queries],  
    () =>
      axios
        .get(baseUrl, { params: queries })
        .then((response) => response.data),
  )
  console.log(`${baseUrl}`)
  return { data, isLoading, isError };
}

