import * as S from "./styles";
import { Products } from "../../../interfaces/products.interface";
import { OtherImagesLink } from "../OtherImagesLink";
import { ExtraDetails } from "../ExtraDetails";
import { ProductDetails } from "../ProductDetailsList";
import { ProductImage } from "../ProductImage";

interface ProductGridProps {
  product: Products[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ product }) => {
  return (
    <S.ProductGrid>
      {product.map((prod) => (
        <div className={"container"} key={prod.id}>
          <OtherImagesLink images={prod.other_image_link} alt={prod.name} />
          <ProductImage imageLink={prod.image_link} altText={prod.name} />
          <ProductDetails prod={prod} />
          <ExtraDetails prod={prod} />
        </div>
      ))}
    </S.ProductGrid>
  );
};
