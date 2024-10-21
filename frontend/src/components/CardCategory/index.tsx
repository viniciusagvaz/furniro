import { Button } from "../Buttons";
import * as S from "./styles";

interface CardProps {
  name: string;
  image_link: string;
}
export function CardCategory({ name, image_link }: CardProps): JSX.Element {
  return (
    <S.Card key={name}>
      <S.Image src={image_link} alt={name} />
      <S.Title>{name}</S.Title>
      <S.HoverCardContent>
        <Button variant="newsletter" children="View Selection" />
      </S.HoverCardContent>
    </S.Card>
  );
}
