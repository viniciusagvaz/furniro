import * as S from "./styles";

import { ProductsSection } from "../../components/SectionProduct";
import { Hero } from "../../components/HeroShop";
import { StoreInfo } from "../../components/InfoStore";

import { useParams } from "react-router-dom";
import { SectionSort } from "../../components/SectionSort";
import { Button } from "../../components/Buttons";
import { Loader } from "../../components/Loader";
import { ErrorPage } from "../ErrorPage";
import { useProducts } from "../../hooks/products";
import { useCategories } from "../../hooks/categories";

interface Category {
  id: number;
  name: string;
  image_link: string;
}

export function Category() {
  const { categoryId } = useParams();
  const { categories } = useCategories();
  const { products, isLoading, isError } = useProducts();

  const category = categories?.find((cat: Category) => {
    return cat.id === Number(categoryId);
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <S.CategoryContainer>
      <Hero image={category?.image_link} title={category?.name} />
      <SectionSort />
      <S.CategoryProductsContainer>
        <ProductsSection limit={16} products={products} />
        <S.ProductsNavigationContainer>
          <Button variant={"navigation"} children={"Next"} />
          <Button variant={"navigation"} children={"Next"} />
          <Button variant={"navigation"} children={"Next"} />
        </S.ProductsNavigationContainer>
      </S.CategoryProductsContainer>
      <StoreInfo />
    </S.CategoryContainer>
  );
}
