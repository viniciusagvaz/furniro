import { Button } from "../Buttons";
import { ProductCard } from "../CardProduct";
import { SectionTitle } from "../TitleSection";

import * as S from "./styles";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

interface ProductsSectionProps {
  limit: number;
  title?: string;
  page: "home" | "shop" | "product";
}

export function ProductsSection({ limit, title, page }: ProductsSectionProps) {

  const { products } = useContext(ProductsContext);

  const displayedProducts = products?.filter((_, index) => index < limit);

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
            image_link={product.image_link ?? ""}
          />
        ))}
      </S.ProductsContent>

      {handleButtonType()}
    </S.ProductsSection>
  );
}
