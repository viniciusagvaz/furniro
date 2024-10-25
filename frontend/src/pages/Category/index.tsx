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
import { useRecoilValue } from "recoil";
import { limitState } from "../../states/limitState";

interface Category {
  id: number;
  name: string;
  image_link: string;
}

export function Category() {
  const { limit } = useRecoilValue(limitState);
  const { categoryId } = useParams();
  const { categories } = useCategories();
  const { data, isLoading, isError } = useProducts({
    limit: `${limit}`,
    page: "1",
    sort: "asc",
    sort_by: "price",
  });

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
        <ProductsSection products={products} />
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
