import axios from "axios";
import { useQuery } from "react-query";


export function useProducts(
  queries: { [key: string]: string | undefined } = {},
  options?: any
) {
  const baseUrl = "http://localhost:3000/products";
  const queryString = Object.keys(queries)
    .filter((key) => queries[key] !== undefined)
    .map((key) => `${key}=${queries[key]}`)
    .join("&");

  const fullURL = `${baseUrl}?${queryString}`;

  const {
    data,
    isLoading,
    isError,
  } = useQuery(
    ["products", queries.limit, queries.page, queries.sort_by, queries.sort],
    async () => {
      const response = await axios.get(fullURL);
      return response.data;
    },
    options
  );

  return { data, isLoading, isError };
}