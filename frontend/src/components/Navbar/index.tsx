import * as S from "./styles";
import { MenuItem } from "../MenuItem";

export function Navbar(): JSX.Element {
  return (
    <S.Navbar>
      <S.Menu>
        <MenuItem children={"Home"} path="home"/>
        <MenuItem children={"Shop"} path="shop"/>
        <MenuItem children={"About"} path="invalid-path"/>
        <MenuItem children={"Contact"} path="invalid-path"/>
      </S.Menu>
    </S.Navbar>
  );
}
