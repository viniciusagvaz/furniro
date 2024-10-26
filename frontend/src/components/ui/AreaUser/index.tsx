import * as S from "./styles";

import { MenuItem } from "../MenuItem";

import user from "../../../assets/icons/user.svg";
import heart from "../../../assets/icons/heart.svg";
import cart from "../../../assets/icons/cart.svg";
import search from "../../../assets/icons/search.svg";

export function AreaUser(): JSX.Element {
  return (
    <S.AreaUser>
      <MenuItem icon={user} path={"invalid-path"} />
      <MenuItem icon={search} path={"invalid-path"} />
      <MenuItem icon={heart} path={"invalid-path"} />
      <MenuItem icon={cart} path={"invalid-path"} />
    </S.AreaUser>
  );
}
