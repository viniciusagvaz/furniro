import { ProductsSection } from "../../components/SectionProduct";
import { Hero } from "../../components/HeroShop";
import { StoreInfo } from "../../components/InfoStore";

import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useGetProductsByCategory } from "../../data/getProductsByCategory";
import { Products } from "../../interfaces/products.interface";
import { SectionSort } from "../../components/SectionSort";

interface Category {
  id: number;
  name: string;
  image_link: string;
  products: Products[];
}

export function Category() {
  const { categoryId } = useParams();
  const { data: categories } = useFetch("category");

  const products = useGetProductsByCategory(Number(categoryId));
  const category = categories?.find((cat: Category) => {
    return cat.id === Number(categoryId);
  });

  return (
    <section>
      <Hero image={category?.image_link} title={category?.name} />
      <SectionSort />
      <ProductsSection
        title={"Products"}
        limit={16}
        buttonVariant="navigation"
        path={`/category/${categoryId}`}
        products={products}
      />
      <StoreInfo />
    </section>
  );
}
