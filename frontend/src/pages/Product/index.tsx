import { useContext } from "react";
import { Button } from "../../components/Buttons/index";
import { ProductsSection } from "../../components/SectionProduct/index";
import { ProductsContext } from "../../contexts/products.context";
import * as S from "./styles";

import { useParams } from "react-router-dom";


export const Product = () => {
  const { products } = useContext(ProductsContext);
  const { productName } = useParams();

  const product = products?.find(product => product.name === productName);

  return (
    <div>
      <S.PageBreadCrumbs>
        <p>Home</p>
        <img src="#" alt="" style={{ width: "22px", height: "22px" }} />
        <p>Shop</p>
        <img src="#" alt="" style={{ width: "22px", height: "22px" }} />

        <span id="Pipe"></span>

        <p>Product Name</p>
      </S.PageBreadCrumbs>

      <S.ProductGrid>
        <div className={"container"}>
          <div className={"other_image"}>
            <img src="#" alt="#" />
            <img src="#" alt="#" />
            <img src="#" alt="#" />
            <img src="#" alt="#" />
          </div>

          <div className={"image"}>
            <img src="#" alt="#" />
          </div>

          <div className={"details"}>
            <h1>{`${product?.name}`}</h1>
            <h2>Rp. 250,000.00</h2>
            <span>****** | 5 Customer Review</span>
            <p style={{ width: "424px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              porro? Unde nesciunt aperiam nulla doloribus atque, rem eius
              obcaecati ipsa earum laudantium velit quidem ipsam sequi animi
              autem. Ad, exercitationem.
            </p>
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
            <p>Sku: SS001</p>
            <p>Sku: SS001</p>
            <p>Sku: SS001</p>
            <p>Sku: SS001</p>
          </div>
        </div>
      </S.ProductGrid>

      <S.LargeDescription>
        <div style={{ display: "flex", gap: "3rem" }}>
          <Button
            variant="newsletter"
            children="Description"
            style={{ borderBottom: "none", fontSize: "1.5rem" }}
          />
          <Button
            variant="newsletter"
            children="Aditional Information"
            style={{
              borderBottom: "none",
              fontSize: "1.5rem",
              fontWeight: "400",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            lineHeight: "1.5",
            color: "#9f9f9f",
          }}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            consectetur ducimus repellat laborum, natus minima impedit sint hic
            autem quos, neque harum facere tempore quo?
          </p>
          <p>
            Vitae nihil voluptate ullam repellat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maiores fugiat velit maxime. Soluta
            porro mollitia et labore corrupti dolores quisquam id doloribus
            delectus fugiat, error ipsum vero eius facere autem. Vitae nihil
            voluptate ullam repellat. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maiores fugiat velit maxime. Soluta porro mollitia
            et labore corrupti dolores quisquam id doloribus delectus fugiat,
            error ipsum vero eius facere autem.
          </p>
        </div>
      </S.LargeDescription>

      <ProductsSection
        page="product"
        limit={4}
        title="Related Products"
      ></ProductsSection>
    </div>
  );
};
