import * as S from "./styles";

import { ProductsSection } from "../../components/SectionProduct/index";
import { ProductGrid } from "../../components/GridProduct";
import { LargeDescription } from "../../components/LargeDescription";
import { BreadCrumbs } from "../../components/Breadcrumbs";
 
import { useParams } from "react-router-dom";
import { Button } from "../../components/Buttons";
import { useState } from "react";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { Loader } from "../../components/Loader";
import { ErrorPage } from "../ErrorPage";
import { useProducts } from "../../hooks/products";

export function ProductDetail() {
  const [limit, setLimit] = useState(4);
  const [showMoreClicked, setShowMoreClicked] = useState(false);

  const { data, isLoading, isError } = useProducts(
    {  
      limit: `${limit}`,
      page: "1",
      sort: "asc",
      sort_by: "price",
    }
  );

  const products = data?.products;

  const { productName } = useParams();
  const currentProduct = products?.find((product) => product.name === productName);



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


  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage  />;
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
        <ProductsSection
          title={"Related Products"}
          products={products}
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
