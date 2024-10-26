import * as S from "./styles.js";

interface TitleProps {
  fontSize: string;
}

export function TitleBrand(Props: TitleProps) {
  return <S.Title fontSize={Props.fontSize}>Furniro.</S.Title>;
}


