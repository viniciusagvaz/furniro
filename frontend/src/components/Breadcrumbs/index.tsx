import * as S from "./styles";
import chevron from "../../assets/icons/chevron.svg";
import { MenuItem } from "../MenuItem";
import { Products } from "../../interfaces/products.interface";

interface BreadCrumbsProps {
  product: Products["name"];
}

export const BreadCrumbs = ({ product }: BreadCrumbsProps) => {
  return (
    <S.BreadCrumbs>
      <MenuItem path={"/home"} color={"#9d9d9d"}>
        Home
      </MenuItem>
      <img src={chevron} alt={"chevron"} />
      <MenuItem path={"/shop"} color={"#9d9d9d"}>
        Shop
      </MenuItem>
      <img src={chevron} alt={"chevron"} />

      <span id="Pipe"></span>

      <S.Product>{product}</S.Product>
    </S.BreadCrumbs>
  );
};
