import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { SkeletonProductCard } from "../components/CardProduct/card.skeleton";

import { Products } from "../interfaces/products_interface";

interface ProductsContext {
  products: Products[] ;
  loading: boolean;
  error: Error | null;
}

export const ProductsContext = createContext<ProductsContext>({
  products: [],
  loading: false,
  error: null,
});

export const ProductsContextProvider = ({ children }) => {
  const { data: products, loading, error } = useFetch("products");

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {loading && <SkeletonProductCard />}
      {error && <div>Error: {error.message}</div>}
      {children}
    </ProductsContext.Provider>
  );
};
