import * as S from "./styles";

import { CategoriesSection } from "../../components/SectionCategory";
import { Hero } from "../../components/HeroHome";
import { ProductsSection } from "../../components/SectionProduct";
import { StoreInfo } from "../../components/InfoStore";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { Button } from "../../components/Buttons";
import { useProducts } from "../../hooks/products";
import { Loader } from "../../components/Loader";
import { ErrorPage } from "../ErrorPage";

export function Home() {
  const navigateTo = useNavigateTo("/shop");

  const { data , isLoading, isError } = useProducts(
    {
      limit: "4",
      page: "1",
    },
  );

  const products = data?.products;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <S.HomeContainer>
      <Hero />
      <CategoriesSection />
      <S.OurProductsContainer>
        <ProductsSection
          title={"Our Products"}
          path="/shop"
          products={products}
        />
        <Button variant={"show"} children={"Show More"} onClick={navigateTo} />
      </S.OurProductsContainer>
      <StoreInfo />
    </S.HomeContainer>
  );
}
