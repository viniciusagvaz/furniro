import axios from "axios";
import { useQuery } from "react-query";
import { api } from "../services/api";
import { ResetLimitState } from "../states/limitState";

export function useFetch(queries, endpoint = 'products') {
  ResetLimitState();
  const baseUrl = `${api.defaults.baseURL}/${endpoint}`;

  const { data, isLoading, isError } = useQuery([endpoint, queries], () =>
    axios.get(baseUrl, { params: queries }).then((response) => response.data)
  );
  return { data, isLoading, isError };
}