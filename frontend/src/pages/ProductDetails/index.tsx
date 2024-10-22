// import * as S from "./styles";

import { useContext } from "react";
import { ProductsSection } from "../../components/SectionProduct/index";
import { ProductsContext } from "../../contexts/products.context";

import { useParams } from "react-router-dom";
import { ProductGrid } from "../../components/GridProduct";
import { LargeDescription } from "../../components/LargeDescription";
import { Products } from "../../interfaces/products_interface";
import { BreadCrumbs } from "../../components/Breadcrumbs";

export const ProductDetail = () => {
  const { products } = useContext(ProductsContext);
  const { productName } = useParams();

  const product: Products | undefined = products?.find(
    (product) => product.name === productName
  );

  const defaultProduct: Products = {
    id: 0,
    name: "",
    sku: "",
    category_id: 0,
    description: "",
    large_description: "",
    price: 0,
    discount_price: 0,
    discount_percent: 0,
    is_new: false,
    image_link: "",
    other_image_link: [],
    category: [],
  };

  const finalProduct: Products = product ?? defaultProduct;
  return (
    <div>
      <BreadCrumbs />
      <ProductGrid product={[finalProduct]} />
      <LargeDescription
        description={finalProduct.description}
        largeDescription={finalProduct.large_description}
      />
      <ProductsSection page="product" limit={4} title="Related Products" />
    </div>
  );
};
