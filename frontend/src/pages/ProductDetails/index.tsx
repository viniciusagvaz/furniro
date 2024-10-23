// import * as S from "./styles";

import { ProductsSection } from "../../components/SectionProduct/index";

import { useParams } from "react-router-dom";
import { ProductGrid } from "../../components/GridProduct";
import { LargeDescription } from "../../components/LargeDescription";
import { Products } from "../../interfaces/products.interface";
import { BreadCrumbs } from "../../components/Breadcrumbs";
import { useFetch } from "../../hooks/useFetch";

export function ProductDetail() {
  const { data: products } = useFetch("products");
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
    <div id="ProductDetails">
      <BreadCrumbs product={finalProduct.name} />
      <ProductGrid product={[finalProduct]} />
      <LargeDescription
        description={finalProduct.description}
        largeDescription={finalProduct.large_description}
      />
      <ProductsSection
        buttonVariant={"show"}
        limit={4}
        title={"Related Products"}

        products={products}
      />
    </div>
  );
}
