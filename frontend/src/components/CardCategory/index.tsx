import { capitalize } from "../../utils/capitalize";
import { Button } from "../Buttons";
import * as S from "./styles";

import { useNavigate } from "react-router-dom";

interface CardProps {
  id: number;
  name: string;
  image_link: string;
}

export const CardCategory: React.FC<CardProps> = ({ id, name, image_link }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/category/${id}`);
  };

  return (
    <S.Card id={name}>
      <S.Image src={image_link} alt={``} />
      <S.Title>{capitalize(name)}</S.Title>
      <S.HoverCardContent>
        <Button
          variant="newsletter"
          children="View Selection"
          onClick={handleNavigate}
        />
      </S.HoverCardContent>
    </S.Card>
  );
};
