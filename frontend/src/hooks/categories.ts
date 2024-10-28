import axios from "axios";
import { useQuery } from "react-query";
import { api } from "../services/api";
import { ResetLimitState } from "../states/limitState";

export function useCategories(queries) {
  ResetLimitState();
  const baseUrl = `${api.defaults.baseURL}/categories`;
  
  const { data, isLoading, isError } = useQuery(["categories", queries], () =>
    axios.get(baseUrl, { params: queries }).then((response) => response.data)
  );
  return { data, isLoading, isError };
}
