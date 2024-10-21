import { Button } from "../Buttons";
import { ProductCard } from "../CardProduct";
import { SectionTitle } from "../TitleSection";
import { SkeletonProductsSection } from "../SectionProduct/section.skeleton";

import * as S from "./styles";
import { useFetch } from "../../hooks/useFetch";

interface ProductsSectionProps {
  limit?: number;
  title?: string;
  page: "home" | "shop" | "product";
}

export function ProductsSection({ limit, title, page }: ProductsSectionProps) {
  const { data: products, loading } = useFetch("products");
  const displayedProducts = products?.slice(0, limit);
  console.log(products);

  if (loading) {
    return <SkeletonProductsSection />;
  }

  const handleTitle = () => {
    if (title) {
      return;
    }

    return null;
  };

  const handleButtonType = () => {
    if (page === "home" || page === "product") {
      return <Button variant={"show"} children="Show More" to="shop" />;
    }

    if (page === "shop") {
      return (
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button variant={"navigation"} children="1" to="shop" />
          <Button variant={"navigation"} children="2" to="shop" />
          <Button variant={"navigation"} children="3" to="shop" />
          <Button variant={"navigation"} children="Next" to="shop" />
        </div>
      );
    }
  };

  return (
    <S.ProductsSection>
      <SectionTitle children={title} fontSize="2.5rem" />
      <S.ProductsContent>
        {displayedProducts?.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            description={product.description ?? ""}
          />
        ))}
      </S.ProductsContent>

      {handleButtonType()}
    </S.ProductsSection>
  );
}
