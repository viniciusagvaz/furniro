import { ProductsSection } from "../../components/SectionProduct";

import { StoreInfo } from "../../components/InfoStore";
import { SectionFilter } from "../../components/SectionFilter";
import { Hero } from "../../components/HeroShop";
import hero from "../../assets/img/hero-shop.jpeg";

export function Shop() {
  return (
    <section>
      <Hero image={hero} title="Shop" />
      <SectionFilter />
      <ProductsSection
        limit={16}
        buttonVariant={"navigation"}
      />
      <StoreInfo />
    </section>
  );
}
