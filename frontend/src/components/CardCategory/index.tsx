import { useNavigateTo } from "../../hooks/useNavigateTo";
import { Button } from "../Buttons";
import * as S from "./styles";

interface CardProps {
  id: number;
  name: string;
  image_link: string;
}

export const CardCategory: React.FC<CardProps> = ({ id, name, image_link }) => {
  const navigateTo = useNavigateTo(`/category/${id}`);

  return (
    <S.Card id={name}>
      <S.Image src={image_link} alt={`${name} image`} />
      <S.Title>{name}</S.Title>
      <S.HoverCardContent>
        <Button
          variant="newsletter"
          children="View Selection"
          onClick={navigateTo}
        />
      </S.HoverCardContent>
    </S.Card>
  );
};
