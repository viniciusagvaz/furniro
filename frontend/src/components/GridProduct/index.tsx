import * as S from "./styles";
import { Button } from "../Buttons";
import { Product } from "../../interfaces/products_interface";

interface ProductGridProps {
  product: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ product }) => {
  return (
    <S.ProductGrid>
      {product.map((prod) => (
        <div className={"container"}>
          <div className={"other_image"}>
            {prod.other_image_link?.map((image) => (
              <img src={`${image}`} alt="#" />
            ))}
          </div>

          <div className={"image"}>
            <img src={`${prod.image_link}`} alt="#" />
          </div>

          <div className={"details"}>
            <h1>{`${prod.name}`}</h1>
            <h2>${prod.price}</h2>
            <span>****** | 5 Customer Review</span>
            <p style={{ width: "424px" }}>{prod.description}</p>
            <p>Size</p>

            <span style={{ display: "flex", gap: ".5rem" }}>
              <Button variant="navigation" children="L"></Button>
              <Button variant="navigation" children="M"></Button>
              <Button variant="navigation" children="S"></Button>
            </span>

            <p>Color</p>
            <span style={{ display: "flex", gap: "1.5rem" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                }}
              ></div>
            </span>

            <span style={{ display: "flex", gap: ".5rem" }}>
              <Button variant="cart" children="- 1 +"></Button>
              <Button variant="cart" children="Add To Cart"></Button>
              <Button variant="cart" children="+ Compare"></Button>
            </span>
          </div>

          <div className={"extra_details"}>
            <p>Sku: {prod.sku}</p>
            <p>Category: {prod.category?.map((cat) => cat.name).join(", ")}</p>
            <p>Tags: Sofas, Chair, Home, Shop</p>
            <p>Sku: SS001</p>
          </div>
        </div>
      ))}
    </S.ProductGrid>
  );
};
