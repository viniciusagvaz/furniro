import * as S from "./styles";

import { ProductsSection } from "../../components/SectionProduct/index";
import { ProductGrid } from "../../components/GridProduct";
import { LargeDescription } from "../../components/LargeDescription";
import { Products } from "../../interfaces/products.interface";
import { BreadCrumbs } from "../../components/Breadcrumbs";

import { useParams } from "react-router-dom";
import { useGetAllProducts } from "../../data/getProductsListApi";
import { useGetProductsByCategory } from "../../data/getProductsByCategory";
import { Button } from "../../components/Buttons";
import { useState } from "react";
import { useNavigateTo } from "../../hooks/useNavigateTo";

export function ProductDetail() {
  const products = useGetAllProducts();
  const { productName } = useParams();

  const product: Products = products?.find(
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

  const currentProduct: Products = product ?? defaultProduct;

  const productsFromCategory = useGetProductsByCategory(
    Number(currentProduct.category_id)
  );

  const [limit, setLimit] = useState(4);
  const [showMoreClicked, setShowMoreClicked] = useState(false);

  const navigateToCategory = useNavigateTo(
    `/category/${currentProduct.category_id}`
  );

  const handleShowMore = () => {
    if (!showMoreClicked) {
      setLimit(limit + 4);
      setShowMoreClicked(true);
    } else {
      navigateToCategory();
    }
  };

  return (
    <S.ProductDetailContainer id="ProductDetails">
      <BreadCrumbs product={currentProduct.name} />
      <ProductGrid product={[currentProduct]} />
      <LargeDescription
        description={currentProduct.description}
        largeDescription={currentProduct.large_description}
      />
      <S.RelatedProductsContainer>
        <ProductsSection
          limit={limit}
          title={"Related Products"}
          products={productsFromCategory}
        />
        <Button
          variant={"show"}
          children={"Show More"}
          onClick={handleShowMore}
        />
      </S.RelatedProductsContainer>
    </S.ProductDetailContainer>
  );
}
