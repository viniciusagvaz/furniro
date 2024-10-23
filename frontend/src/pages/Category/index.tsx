import * as S from "./styles";

import { ProductsSection } from "../../components/SectionProduct";
import { Hero } from "../../components/HeroShop";
import { StoreInfo } from "../../components/InfoStore";

import { useParams } from "react-router-dom";
import { useGetProductsByCategory } from "../../data/getProductsByCategory";
import { Products } from "../../interfaces/products.interface";
import { SectionSort } from "../../components/SectionSort";
import { useGetCategories } from "../../data/getCategoriesListApi";
import { Button } from "../../components/Buttons";

interface Category {
  id: number;
  name: string;
  image_link: string;
  products: Products[];
}

export function Category() {
  const { categoryId } = useParams();
  const { data: categories } = useGetCategories();

  const products = useGetProductsByCategory(Number(categoryId));
  const category = categories?.find((cat: Category) => {
    return cat.id === Number(categoryId);
  });

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
