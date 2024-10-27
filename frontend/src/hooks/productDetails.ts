import axios from "axios";
import { useQuery } from "react-query";
import { api } from "../services/api";

export function useProductDetails(queries) {
  const { name, ...queryParams } = queries;
  const baseUrl = `${api.defaults.baseURL}/products/${name}`;

  const { data, isLoading, isError } = useQuery(["products", queries], () =>
    axios
      .get(baseUrl, { params: queryParams })
      .then((response) => response.data)
  );
  return { data, isLoading, isError };
}
