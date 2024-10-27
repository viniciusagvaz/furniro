import * as S from "./styles";

import { ProductsSection } from "../../components/products/SectionProduct";
import { ProductGrid } from "../../components/productdetail/GridProduct";
import { LargeDescription } from "../../components/productdetail/LargeDescription";
import { BreadCrumbs } from "../../components/productdetail/Breadcrumbs";

import { useParams } from "react-router-dom";
import { Button } from "../../components/ui/Buttons";
import { useState } from "react";
import { Loader } from "../../components/ui/Loader";
import { ErrorPage } from "../ErrorPage";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { useFetch } from "../../hooks/useFetch";

export function ProductDetail() {
  const [limit, setLimit] = useState(4);
  const [showMoreClicked, setShowMoreClicked] = useState(false);
  const { productName } = useParams();

  const { data, isLoading, isError } = useFetch({
    limit: `${limit}`,
    page: "1",
  }, `products/${productName}`);

  const products = data?.relatedProducts;
  const currentProduct = data?.product;
  const category_id = currentProduct?.category_id;

  const navigateToCategory = useNavigateTo(`/category/${category_id}`);

  const handleShowMore = () => {
    if (!showMoreClicked) {
      setLimit(limit + 4);
      setShowMoreClicked(true);
    } else {
      navigateToCategory();
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <S.ProductDetailContainer id="ProductDetails">
      <BreadCrumbs product={currentProduct.name} />
      <ProductGrid product={[currentProduct]} />
      <LargeDescription
        description={currentProduct.description}
        largeDescription={currentProduct.large_description}
      />
      <S.RelatedProductsContainer>
        <ProductsSection title={"Related Products"} products={products} />
        <Button
          variant={"show"}
          children={"Show More"}
          onClick={handleShowMore}
        />
      </S.RelatedProductsContainer>
    </S.ProductDetailContainer>
  );
}
