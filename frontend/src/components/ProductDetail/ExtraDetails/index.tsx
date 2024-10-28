import * as S from "./styles";
import { ExtraDetail } from "../ExtraDetail";
import { Products } from "../../../interfaces/products.interface";

interface ExtraDetailsProps {
  prod: Products;
}

export const ExtraDetails: React.FC<ExtraDetailsProps> = ({ prod }) => {
  return (
    <S.ExtraDetails className={"extra_details"}>
      <ExtraDetail label="Sku" value={prod.sku} />
      <ExtraDetail label="Category" value={prod.name} />
      <ExtraDetail label="Tags:" value="Sofas, Chair, Home, Shop" />
      <ExtraDetail label="Socials:" value="Facebook, Twitter, Instagram" />
    </S.ExtraDetails>
  );
};
