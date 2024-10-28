import * as S from "./styles";
import star from "../../../assets/icons/star.svg";
import { Pipe } from "../../ui/Pipe";
import { Icon } from "../../ui/Icon";

interface ProductRatingProps {
  rating: number;
}

export const ProductRating: React.FC<ProductRatingProps> = ({ rating }) => {
  return (
    <S.Rating>
      <span className={"stars"}>
        {[...Array(rating)].map((_, index) => (
          <Icon src={star} alt="" key={index} />
        ))}
      </span>
      <Pipe height={"2rem"} width={"0"} border={"1px solid #9d9d9d"} />
      <span>5 Customer Review</span>
    </S.Rating>
  );
};
