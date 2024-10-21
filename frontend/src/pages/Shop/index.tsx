import { ProductsSection } from "../../components/SectionProduct";
import { Hero } from "../../components/HeroShop";
import { StoreInfo } from "../../components/InfoStore";
import { SectionFilter } from "../../components/SectionFilter";

export function Shop() {
  return (
    <section>
      <Hero />
      <SectionFilter />
      <ProductsSection page="shop" limit={16} />
      <StoreInfo />
    </section>
  );
}
