import { Button } from "../Buttons";
import { MenuItem } from "../MenuItem";
import * as S from "./styles";

import { capitalize } from "../../utils/capitalize";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: number,
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
  
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${name}`);
  };

  return (
    <S.ProductCard id={name} >
      <S.Image src={image_link} alt={`Product ${name}`} />

      <S.ProductInformation>
        <S.Title>{capitalize(name)}</S.Title>
        <S.Description>{description}</S.Description>

        {discount_price ? (
          <S.PriceContainer>
            <S.DiscountedPrice>{`Rp ${discount_price}`}</S.DiscountedPrice>
            <S.OldPrice>{`Rp ${price}`}</S.OldPrice>
          </S.PriceContainer>
        ) : (
          <S.PriceContainer>
            <S.Price>{`Rp ${price}`}</S.Price>
          </S.PriceContainer>
        )}
      </S.ProductInformation>

      {is_new && <S.NewLabel>New</S.NewLabel>}
      {discount_percent && (
        <S.DiscountLabel>{`-${discount_percent}%`}</S.DiscountLabel>
      )}
      {is_new && discount_percent && (
        <span style={{ display: "flex", gap: "0.5rem" }}>
          <S.NewLabel style={{ right: "8%", top: "12.25%", zIndex: 0 }}>
            New
          </S.NewLabel>
          <S.DiscountLabel>{`-${discount_percent}%`}</S.DiscountLabel>
        </span>
      )}

      <S.HoverCardContent>
        <Button
          variant="details"
          children="See Details"
          onClick={handleNavigate}
        />
        <S.Actions>
          <li>
            <MenuItem
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                    fill="white"
                  />
                </svg>
              }
              path="/"
              children={"Share"}
              color={"#fff"}
            />
          </li>
          <li>
            <MenuItem
              color={"#fff"}
              icon={
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.08004 6L10.08 7L13.52 3.55L10 0L9.00004 1L10.8 2.8H1.00004V4.2H10.82L9.08004 6ZM4.86004 8L3.86004 7L0.420044 10.5L3.91004 14L4.91004 13L3.10004 11.2H13V9.8H3.10004L4.86004 8Z"
                    fill="white"
                  />
                </svg>
              }
              children={"Compare"}
              path="/"
            />
          </li>
          <li>
            <MenuItem
              color={"#fff"}
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.16671 1.5C3.94554 1.5 1.33337 4.08533 1.33337 7.275C1.33337 9.84983 2.35421 15.9608 12.4027 22.1383C12.5827 22.2479 12.7893 22.3058 13 22.3058C13.2107 22.3058 13.4174 22.2479 13.5974 22.1383C23.6459 15.9608 24.6667 9.84983 24.6667 7.275C24.6667 4.08533 22.0545 1.5 18.8334 1.5C15.6122 1.5 13 5 13 5C13 5 10.3879 1.5 7.16671 1.5Z"
                    stroke="#fff"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              children={"Like"}
              path="/"
            />
          </li>
        </S.Actions>
      </S.HoverCardContent>
    </S.ProductCard>
  );
};
