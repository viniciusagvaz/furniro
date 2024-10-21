import { ProductsSection } from "../../components/SectionProduct";
import { Hero } from "../../components/HeroShop";
import { StoreInfo } from "../../components/InfoStore";
import { SectionFilter } from "../../components/SectionFilter";

import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { capitalize } from "../../utils/capitalize";

interface Category {
  id: number;
  name: string;
  image_link: string;
}

export function Category() {
  const { categoryName } = useParams();
  const { data: categories } = useFetch("category");
  
  const category = categories?.find((cat: Category) => {
    return cat.name === categoryName;
  });
  
  return (
    <section>
      <Hero image={category?.image_link} title={capitalize(categoryName ?? '')} />
      <SectionFilter />
      <ProductsSection page="shop" limit={16} />
      <StoreInfo />
    </section>
  );
}
