import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { Category } from "../interfaces/categories_interface";

interface CategoriesContextValue {
  categories: Category[];
  loading: boolean;
  error: Error | null;
}

export const CategoriesContext = createContext<CategoriesContextValue>({
  categories: [],
  loading: false,
  error: null,
});

export const CategoriesContextProvider = ({ children }) => {
  const { data: categories, loading, error } = useFetch("category");

  return (
    <CategoriesContext.Provider value={{ categories, loading, error }}>
      {loading && <div>loading</div>}
      {error && <div>Error: {error.message}</div>}
      {children}
    </CategoriesContext.Provider>
  );
};
