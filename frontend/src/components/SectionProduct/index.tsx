import { Button } from "../Buttons";
import { ProductCard } from "../CardProduct";
import { SectionTitle } from "../TitleSection";

import * as S from "./styles";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { DisplayOptions } from "../../interfaces/display_limiter.interface";
import { SkeletonProductCard } from "../CardProduct/card.skeleton";

interface ProductsSectionProps {
  displayedProducts?: DisplayOptions;
  limit: number;
  title?: string;
  path?: string | null;
  buttonVariant: "show" | "details" | "navigation" | "cart" | "newsletter";
}

export function ProductsSection({
  limit,
  title,
  path,
  buttonVariant,
}: ProductsSectionProps) {
  const { products, loading } = useContext(ProductsContext);
  const displayedProducts = products?.filter((_, index) => index < limit);
  const navigateTo = useNavigateTo(path ?? "");

  if (loading) {
    return <SkeletonProductCard />;
  }

  return (
    <S.ProductsSection id="ProductsSection">
      <SectionTitle children={title} fontSize="2.5rem" />
      <S.ProductsContent>
        {displayedProducts?.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            description={product.description ?? ""}
            image_link={product.image_link ?? ""}
          />
        ))}
      </S.ProductsContent>

      <Button
        variant={buttonVariant}
        children="Show More"
        onClick={navigateTo}
      />
    </S.ProductsSection>
  );
}
