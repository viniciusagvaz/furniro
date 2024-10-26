import { Button } from "../../ui/Buttons";  
import { MenuItem } from "../../ui/MenuItem";
import * as S from "./styles";

import share from "../../../assets/icons/share.svg";
import compare from "../../../assets/icons/compare.svg";
import heart from "../../../assets/icons/heart-wt.svg";

import { useNavigateTo } from "../../../hooks/useNavigateTo";

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
  is_new,
  image_link,
}) => {
  const navigateTo = useNavigateTo(`/product/${name}`);

  return (
    <S.ProductCard id={name}>
      <S.Image src={image_link} alt={`Product ${name}`} />

      <S.ProductInformation>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>

        {discount_price ? (
          <S.PriceContainer>
            <S.DiscountedPrice>{`$ ${discount_price}`}</S.DiscountedPrice>
            <S.OldPrice>{`$ ${price}`}</S.OldPrice>
          </S.PriceContainer>
        ) : (
          <S.PriceContainer>
            <S.Price>{`$ ${price}`}</S.Price>
          </S.PriceContainer>
        )}
      </S.ProductInformation>

      {is_new && <S.NewLabel>New</S.NewLabel>}
      {discount_percent && (
        <S.DiscountLabel>{`-${discount_percent}%`}</S.DiscountLabel>
      )}

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
