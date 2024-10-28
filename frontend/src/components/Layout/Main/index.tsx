import { Outlet } from "react-router-dom";
import * as S from "./styles";

export function Main() {
  return (
    <S.Main>
      <Outlet />
    </S.Main>
  );
}
