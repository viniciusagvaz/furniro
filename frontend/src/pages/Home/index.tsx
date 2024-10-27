import * as S from "./styles";

import { CategoriesSection } from "../../components/categories/SectionCategory";
import { Hero } from "../../components/layout/HeroHome";
import { ProductsSection } from "../../components/products/SectionProduct";
import { StoreInfo } from "../../components/ui/InfoStore";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { Button } from "../../components/ui/Buttons";
import { useFetch } from "../../hooks/products";
import { Loader } from "../../components/ui/Loader";
import { ErrorPage } from "../ErrorPage";

export function Home() {
  const navigateTo = useNavigateTo("/shop");

  const { data, isLoading, isError } = useFetch({
    limit: "4",
    page: "1",
  });

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
