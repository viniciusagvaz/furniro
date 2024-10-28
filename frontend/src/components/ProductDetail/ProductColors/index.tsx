import * as S from "./styles";

export const ProductColors: React.FC = () => {
  return (
    <>
      <S.ColorsLabel htmlFor={"colors"}>Color</S.ColorsLabel>
      <S.Colors name={"colors"}>
        <S.Color style={{ backgroundColor: `darkred` }} />
        <S.Color style={{ backgroundColor: `green` }} />
        <S.Color style={{ backgroundColor: `darkblue` }} />
      </S.Colors>
    </>
  );
};
