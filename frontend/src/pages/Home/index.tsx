import * as S from "./styles";

import { CategoriesSection } from "../../components/SectionCategory";
import { Hero } from "../../components/HeroHome";
import { ProductsSection } from "../../components/SectionProduct";
import { StoreInfo } from "../../components/InfoStore";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { useGetAllProducts } from "../../hooks/useGetAllProducts";
import { Button } from "../../components/Buttons";
import { Loader } from "../../components/Loader";
import { ErrorPage } from "../ErrorPage";

export function Home() {
  const { products, loading, error } = useGetAllProducts();
  const navigateTo = useNavigateTo("/shop");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <S.HomeContainer>
      <Hero />
      <CategoriesSection />
      <S.OurProductsContainer>
        <ProductsSection
          limit={4}
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
