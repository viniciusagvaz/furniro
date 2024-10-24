import * as S from "./styles";

import { ProductsSection } from "../../components/SectionProduct";
import { Hero } from "../../components/HeroShop";
import { StoreInfo } from "../../components/InfoStore";

import { useParams } from "react-router-dom";
import { useGetProductsByCategory } from "../../data/getProductsByCategory";
import { SectionSort } from "../../components/SectionSort";
import { useGetCategories } from "../../data/getCategoriesListApi";
import { Button } from "../../components/Buttons";
import { Loader } from "../../components/Loader";
import { ErrorPage } from "../ErrorPage";

interface Category {
  id: number;
  name: string;
  image_link: string;
}

export function Category() {
  const { categoryId } = useParams();
  const { categories } = useGetCategories();
  const { products, loading, error } = useGetProductsByCategory(
    Number(categoryId)
  );

  const category = categories?.find((cat: Category) => {
    return cat.id === Number(categoryId);
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage statusCode={error.status} />;
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
