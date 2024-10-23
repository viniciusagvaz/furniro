import * as S from "./styles";

import { ProductsSection } from "../../components/SectionProduct";
import { StoreInfo } from "../../components/InfoStore";
import { SectionFilter } from "../../components/SectionFilter";
import { Hero } from "../../components/HeroShop";

import { useGetAllProducts } from "../../data/getProductsListApi";

import hero from "../../assets/img/hero-shop.jpeg";
import { Button } from "../../components/Buttons";

export function Shop() {
  const products = useGetAllProducts();

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
