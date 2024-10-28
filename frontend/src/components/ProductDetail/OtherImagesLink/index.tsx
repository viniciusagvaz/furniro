import * as S from "./styles";

interface OtherImagesProps {
  images: string[] | undefined; 
  alt: string;
}

export const OtherImagesLink: React.FC<OtherImagesProps> = ({ images, alt }) => {
  return (
    <S.OtherImages>
      {images?.map((image, index) => (
        <S.Image src={`${image}`} alt={alt} key={`${alt}-${index}`} />
      ))}
    </S.OtherImages>
  );
};
