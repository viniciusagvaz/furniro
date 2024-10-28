import * as S from "./styles";
import { Button } from "../../ui/Buttons";

export const ProductCartOptions: React.FC = () => {
  return (
    <S.CartOptions>
      <Button variant="cart" children="- 1 +" />
      <Button variant="cart" children="Add To Cart" />
      <Button variant="cart" children="+ Compare" />
    </S.CartOptions>
  );
};
