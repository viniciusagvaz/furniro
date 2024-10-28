import * as S from "./styles";
import { Button } from "../../ui/Buttons";

export const ProductSizes: React.FC = () => {
  return (
    <>
      <S.SizesLabel htmlFor={"size"}>Size</S.SizesLabel>
      <S.Sizes>
        <Button variant="navigation" children="L" />
        <Button variant="navigation" children="M" />
        <Button variant="navigation" children="S" />
      </S.Sizes>
    </>
  );
};
