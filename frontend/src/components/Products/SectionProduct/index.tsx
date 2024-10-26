import { ProductCard } from "../CardProduct";
import { SectionTitle } from "../../ui/TitleSection";

import * as S from "./styles";
import { Products } from "../../../interfaces/products.interface";

interface ProductsSectionProps {
  title?: string;
  path?: string | null;
  products: Products[];
}

export function ProductsSection({
  title,
  products,
}: ProductsSectionProps) {

  return (
    <S.ProductsSection>
      <SectionTitle children={title} fontSize="2.5rem" />
      <S.ProductsContent>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </S.ProductsContent>
    </S.ProductsSection>
  );
}
