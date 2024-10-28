import * as S from "./styles.js";
import { MenuItem } from "../../ui/MenuItem/styles.js";
import { Icon } from "../../ui/Icon/index.js";
import chevron from "../../../assets/icons/chevron.svg";

interface HeroProps {
  title: string;
}

export function HeroMenu({ title }: HeroProps) {
  return (
    <S.HeroMenu>
      <MenuItem to={"/home"} children={"Home"} />
      <Icon src={chevron} alt="chevron" width={12} height={12} />
      <S.Category>{title}</S.Category>
    </S.HeroMenu>
  );
}
