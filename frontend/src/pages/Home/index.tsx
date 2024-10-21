import { CategoriesSection } from "../../components/SectionCategory";
import { Hero } from "../../components/HeroHome";
import { ProductsSection } from "../../components/SectionProduct";
import { StoreInfo } from "../../components/InfoStore";
import { HomeContainer } from "./styles";
export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <CategoriesSection />
      <ProductsSection page="home" limit={9} title="Our Products"/>
      <StoreInfo />
    </HomeContainer>
  );
}
