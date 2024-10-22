import { MenuItem } from "../MenuItem/styles.js";
import * as S from "./styles.js";

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

        <span>
          <MenuItem to={"/home"} children={"Home"} />
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
          </svg>

          <S.Category>{title}</S.Category>
        </span>
      </S.HeroContent>
    </S.Hero>
  );
}
