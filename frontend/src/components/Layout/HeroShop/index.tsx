import * as S from "./styles.js";
import { HeroMenu } from "../HeroMenu/index.js";

interface HeroProps {
  title: string;
  image: string;
}

export function Hero({ title, image }: HeroProps) {
  return (
    <S.Hero>
      <S.HeroBg src={image} alt="hero" />
      <S.HeroContent>
        <S.Title>{title}</S.Title>
        <HeroMenu title={title} />
      </S.HeroContent>
    </S.Hero>
  );
}
