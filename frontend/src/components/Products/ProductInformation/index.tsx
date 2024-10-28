// ProductInformation.tsx
import * as S from "./styles";

interface ProductInformationProps {
  name: string;
  description: string | null;
  price: number;
  discount_price: number | null;
  discount_percent: number | null;
  is_new: boolean;
}

export const ProductInformation: React.FC<ProductInformationProps> = ({
  name,
  description,
  price,
  discount_price,
  discount_percent,
  is_new,
}) => {
  const priceOnSale = discount_percent != 0;

  return (
    <S.ProductInformation>
      <S.Title>{name}</S.Title>
      <S.Description>{description}</S.Description>

      {priceOnSale ? (
        <S.PriceContainer>
          <S.DiscountedPrice>{`$ ${discount_price}`}</S.DiscountedPrice>
          <S.OldPrice>{`$ ${price}`}</S.OldPrice>
          <S.DiscountLabel>{`-${discount_percent}%`}</S.DiscountLabel>
        </S.PriceContainer>
      ) : (
        <S.PriceContainer>
          <S.Price>{`$ ${price}`}</S.Price>
        </S.PriceContainer>
      )}
      {is_new && <S.NewLabel>New</S.NewLabel>}
    </S.ProductInformation>
  );
};
