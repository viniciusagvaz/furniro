import * as S from "./styles";

import { ProductsSection } from "../../components/SectionProduct";
import { StoreInfo } from "../../components/InfoStore";
import { SectionFilter } from "../../components/SectionFilter";
import { Hero } from "../../components/HeroShop";

import { useGetAllProducts } from "../../data/getProductsListApi";

import hero from "../../assets/img/hero-shop.jpeg";
import { Button } from "../../components/Buttons";
import { Loader } from "../../components/Loader";
import { ErrorPage } from "../ErrorPage";

export function Shop() {
  const { products, loading, error } = useGetAllProducts();

  if (loading) {
    return <Loader />;
  }

  
  if (error) {
    return <ErrorPage statusCode={error.status}/>;
  }

  return (
    <S.ShopContainer>
      <Hero image={hero} title="Shop" />
      <SectionFilter />

      <S.ShopProductsContainer>
        <ProductsSection limit={16} products={products} />
        <S.ProductsNavigationContainer>
          <Button variant={"navigation"} children={"Next"} />
          <Button variant={"navigation"} children={"Next"} />
          <Button variant={"navigation"} children={"Next"} />
        </S.ProductsNavigationContainer>
      </S.ShopProductsContainer>
      <StoreInfo />
    </S.ShopContainer>
  );
}
