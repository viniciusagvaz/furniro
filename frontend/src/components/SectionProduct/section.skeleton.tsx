import * as S from "./styles";
import { SkeletonProductCard } from "../CardProduct/card.skeleton";
import { Button } from "../Buttons";
import { SectionTitle } from "../TitleSection";

export const SkeletonProductsSection = () => {
  return (
    <S.ProductsSection>
      <SectionTitle children="Loading..." fontSize="2.5rem" />

      <S.ProductsContent>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <SkeletonProductCard key={index} />
        ))}
      </S.ProductsContent>

      <Button variant={"show"} children="Loading..." to="shop" />
    </S.ProductsSection>
  );
};
