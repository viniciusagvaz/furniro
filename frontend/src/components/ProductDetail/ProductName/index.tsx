import * as S from "./styles";

interface ProductNameProps {
  name: string;
}

export const ProductName: React.FC<ProductNameProps> = ({ name }) => {
  return <S.Name>{name}</S.Name>;
};
