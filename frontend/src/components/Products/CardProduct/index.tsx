import { Button } from "../../ui/Buttons";
import { MenuItem } from "../../ui/MenuItem";
import * as S from "./styles";

import share from "../../../assets/icons/share.svg";
import compare from "../../../assets/icons/compare.svg";
import heart from "../../../assets/icons/heart-wt.svg";

import { useNavigateTo } from "../../../hooks/useNavigateTo";
import { ProductImage } from "../ProductImage";
import { ProductInformation } from "../ProductInformation";

interface CardProps {
  id: number;
  name: string;
  description: string | null;
  price: number;
  discount?: boolean;
  discount_price: number | null;
  discount_percent: number | null;
  is_new: boolean;
  image_link: string;
}

export const ProductCard: React.FC<CardProps> = ({
  name,
  description,
  price,
  discount_price,
  discount_percent,
  image_link,
  is_new,
}) => {
  const navigateTo = useNavigateTo(`/product/${name}`);

  return (
    <S.ProductCard id={name}>
      <ProductImage imageLink={image_link} altText={name} />
      <ProductInformation
        {...{
          name,
          description,
          price,
          discount_price,
          discount_percent,
          is_new,
        }}
      />

      <S.HoverCardContent>
        <Button variant="details" children="See Details" onClick={navigateTo} />
        <S.Actions>
          <li>
            <MenuItem icon={share} path="/" children={"Share"} color={"#fff"} />
          </li>
          <li>
            <MenuItem
              color={"#fff"}
              icon={compare}
              children={"Compare"}
              path="/"
            />
          </li>
          <li>
            <MenuItem color={"#fff"} icon={heart} children={"Like"} path="/" />
          </li>
        </S.Actions>
      </S.HoverCardContent>
    </S.ProductCard>
  );
};
