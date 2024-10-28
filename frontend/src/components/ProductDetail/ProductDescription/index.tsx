import * as S from "./styles";

interface ProductDescriptionProps {
  description: string;
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  return <S.Description>{description}</S.Description>;
};
