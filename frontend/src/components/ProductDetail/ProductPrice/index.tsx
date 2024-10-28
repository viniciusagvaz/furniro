import * as S from "./styles";

interface ProductPriceProps {
  price: number;
}

export const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
  return <S.Price>${price}</S.Price>;
};
