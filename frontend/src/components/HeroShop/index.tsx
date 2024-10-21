import * as S from "./styles.js";

export function Hero() {
  return (
    <S.Hero>
      <S.HeroBg />
      <S.HeroContent>
        <h2>Shop</h2>

        <span>
          <p>Home</p>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
          </svg>

          <p>Shop</p>
        </span>
      </S.HeroContent>
    </S.Hero>
  );
}
