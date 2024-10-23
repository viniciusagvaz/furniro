import { ProductCard } from "../CardProduct";
import { SectionTitle } from "../TitleSection";

import * as S from "./styles";
import { DisplayOptions } from "../../interfaces/display_limiter.interface";
import { Products } from "../../interfaces/products.interface";

interface ProductsSectionProps {
  displayedProducts?: DisplayOptions;
  limit: number;
  title?: string;
  path?: string | null;
  products: Products[];
}

export function ProductsSection({
  limit,
  title,
  products,
}: ProductsSectionProps) {
  const displayedProducts = products?.filter((_, index) => index < limit);

  return (
    <S.ProductsSection>
      <SectionTitle children={title} fontSize="2.5rem" />
      <S.ProductsContent>
        {displayedProducts?.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </S.ProductsContent>
    </S.ProductsSection>
  );
}
