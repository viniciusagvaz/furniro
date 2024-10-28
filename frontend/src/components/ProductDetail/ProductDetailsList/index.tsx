import { Products } from "../../../interfaces/products.interface";
import { ProductCartOptions } from "../ProductCartOptions";
import { ProductColors } from "../ProductColors";
import { ProductDescription } from "../ProductDescription";
import { ProductName } from "../ProductName";
import { ProductPrice } from "../ProductPrice";
import { ProductRating } from "../ProductRating";
import { ProductSizes } from "../ProductSizes";
import * as S from "./styles";

interface ProductDetailsProps {
  prod: Products;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ prod }) => {
  return (
    <S.Details className={"details"}>
      <ProductName name={prod.name} />
      <ProductPrice price={prod.price} />
      <ProductRating rating={5} />
      <ProductDescription description={prod.description} />
      <ProductSizes />
      <ProductColors />
      <ProductCartOptions />
    </S.Details>
  );
};
