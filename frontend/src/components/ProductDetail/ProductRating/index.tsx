import * as S from "./styles";
import star from "../../../assets/icons/star.svg";

interface ProductRatingProps {
  rating: number;
}

export const ProductRating: React.FC<ProductRatingProps> = ({ rating }) => {
  return (
    <S.Rating>
      <span className={"stars"}>
        {[...Array(rating)].map((_, index) => (
          <img src={star} alt="" key={index} />
        ))}
      </span>
      <span className={"pipe"} />
      <span>5 Customer Review</span>
    </S.Rating>
  );
};
