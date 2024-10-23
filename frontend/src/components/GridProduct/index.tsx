import * as S from "./styles";
import { Button } from "../Buttons";
import { Products } from "../../interfaces/products.interface";
import star from "../../assets/icons/star.svg";

interface ProductGridProps {
  product: Products[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ product }) => {
  return (
    <S.ProductGrid>
      {product.map((prod) => (
        <div className={"container"} key={prod.id}>
          <S.OtherImages className={"other_image"}>
            {prod.other_image_link?.map((image) => (
              <img src={`${image}`} alt={`${prod.name}`} key={`${prod.name}`} />
            ))}
          </S.OtherImages>

          <S.Image className={"image"}>
            <img src={`${prod.image_link}`} alt={`${prod.name}`} />
          </S.Image>

          <S.Details className={"details"}>
            <S.Name>{`${prod.name}`}</S.Name>
            <S.Price>${prod.price}</S.Price>
            <S.Rating>
              <span className={"stars"}>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </span>
              <span className={"pipe"}></span> <span>5 Customer Review</span>
            </S.Rating>
            <S.Description>{prod.description}</S.Description>

            <S.SizesLabel htmlFor={"size"}>Size</S.SizesLabel>
            <S.Sizes>
              <Button variant="navigation" children="L" />
              <Button variant="navigation" children="M" />
              <Button variant="navigation" children="S" />
            </S.Sizes>

            <S.ColorsLabel htmlFor={"colors"}>Color</S.ColorsLabel>
            <S.Colors name={"colors"}>
              <S.Color />
              <S.Color />
              <S.Color />
            </S.Colors>

            <S.CartOptions>
              <Button variant="cart" children="- 1 +" />
              <Button variant="cart" children="Add To Cart" />
              <Button variant="cart" children="+ Compare" />
            </S.CartOptions>
          </S.Details>

          <S.ExtraDetails className={"extra_details"}>
            <S.ExtraDetail>
              <S.Detail>Sku</S.Detail>
              <span>:</span>
              <S.DetailValue>{prod.sku}</S.DetailValue>
            </S.ExtraDetail>

            <S.ExtraDetail>
              <S.Detail>Category</S.Detail>
              <span>:</span>
              <S.DetailValue>{prod.category["name"]}</S.DetailValue>
            </S.ExtraDetail>

            <S.ExtraDetail>
              <S.Detail>Tags: </S.Detail>
              <span>:</span>
              <S.DetailValue>Sofas, Chair, Home, Shop</S.DetailValue>
            </S.ExtraDetail>

            <S.ExtraDetail>
              <S.Detail>Socials:</S.Detail>
              <span>:</span>
              <S.DetailValue>Facebook, Twitter, Instagram</S.DetailValue>
            </S.ExtraDetail>
          </S.ExtraDetails>
        </div>
      ))}
    </S.ProductGrid>
  );
};
