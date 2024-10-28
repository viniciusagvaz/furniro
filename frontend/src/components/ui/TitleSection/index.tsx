import * as S from "./styles.js";

interface TitleProps {
  children?: string;
  fontSize: string;
}

export function SectionTitle({ children, fontSize }: TitleProps) {
  return <S.Title fontSize={fontSize}>{children}</S.Title>;
}
