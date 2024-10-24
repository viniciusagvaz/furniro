import axios from "axios";
import { useQuery } from "react-query";

export function useProducts(){
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", () =>
    axios
      .get("http://localhost:3000/products")
      .then((response) => response.data)
  );
  console.log(products.length)
  return { products, isLoading, isError };
};
