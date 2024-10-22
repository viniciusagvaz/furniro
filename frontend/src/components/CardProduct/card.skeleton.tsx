import * as S from "./styles";



export const SkeletonProductCard = () => {
  return (
    <S.ProductCard>
      <S.Image src="" alt="Product Image" />

      <S.ProductInformation>
        <S.Title>Loading...</ S.Title>
        <S.Description />
        <S.PriceContainer>
          <S.DiscountedPrice />
        </S.PriceContainer>
      </S.ProductInformation>
    </S.ProductCard>
  );
};
