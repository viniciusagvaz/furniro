import axios from "axios";
import { useQuery } from "react-query";
import { api } from "../services/api";
import { ResetLimitState } from "../states/limitState";

export function useProducts(queries) {
  ResetLimitState();
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

