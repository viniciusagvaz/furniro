import * as S from "./styles";

export function Hero(): JSX.Element {
  return (
    <S.Hero>
      <S.HeroBg />
      <S.HeroContent>
        <S.HeroText>
          Welcome to Furniro, your premier destination for stylish and
          functional home furnishings, where comfort meets elegance.
        </S.HeroText>
      </S.HeroContent>
    </S.Hero>
  );
}
