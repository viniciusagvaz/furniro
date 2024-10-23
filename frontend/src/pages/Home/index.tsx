import { CategoriesSection } from "../../components/SectionCategory";
import { Hero } from "../../components/HeroHome";
import { ProductsSection } from "../../components/SectionProduct";
import { StoreInfo } from "../../components/InfoStore";
import { HomeContainer } from "./styles";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { useFetch } from "../../hooks/useFetch";

export function Home() {
  const { data: products } = useFetch("products");
  useNavigateTo("/shop");

  return (
    <HomeContainer>
      <Hero />
      <CategoriesSection />
      <ProductsSection
        limit={4}
        title={"Our Products"}
        path="/shop"
        buttonVariant="show"
        products={products}
      />
      <StoreInfo />
    </HomeContainer>
  );
}
