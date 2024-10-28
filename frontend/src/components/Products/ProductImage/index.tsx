import * as S from "./styles";

interface ProductImageProps {
  imageLink: string;
  altText: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ imageLink, altText }) => {
  return (
    <S.Image src={imageLink} alt={altText} />
  );
};