import * as S from "./styles";
import chevron from "../../../assets/icons/chevron.svg";
import { MenuItem } from "../../ui/MenuItem";
import { Products } from "../../../interfaces/products.interface";
import { Icon } from "../../ui/Icon";
import { Pipe } from "../../ui/Pipe";

interface BreadCrumbsProps {
  product: Products["name"];
}

export const BreadCrumbs = ({ product }: BreadCrumbsProps) => {
  return (
    <S.BreadCrumbs>
      <MenuItem path={"/home"} color={"#9d9d9d"} children={"Home"} />
      <Icon src={chevron} alt={"chevron"} width={12} height={12} />
      <MenuItem path={"/shop"} color={"#9d9d9d"} children={"Shop"} />
      <Icon src={chevron} alt={"chevron"} width={12} height={12} />
      <Pipe width={"0"} height={"2rem"} />
      <S.Product>{product}</S.Product>
    </S.BreadCrumbs>
  );
};
