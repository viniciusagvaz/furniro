import { Button } from "../Buttons";
import { ProductCard } from "../CardProduct";
import { SectionTitle } from "../TitleSection";

import * as S from "./styles";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { DisplayOptions } from "../../interfaces/display_limiter.interface";
import { Products } from "../../interfaces/products.interface";

interface ProductsSectionProps {
  displayedProducts?: DisplayOptions;
  limit: number;
  title?: string;
  path?: string | null;
  buttonVariant: "show" | "details" | "navigation" | "cart" | "newsletter";
  products: Products[];
}

export function ProductsSection({
  limit,
  title,
  path,
  buttonVariant,
  products,
}: ProductsSectionProps) {
  const displayedProducts = products?.filter((_, index) => index < limit);
  const navigateTo = useNavigateTo(path ?? "");

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
