import * as S from "./styles";

import { ProductsSection } from "../../components/products/SectionProduct";
import { StoreInfo } from "../../components/ui/InfoStore";
import { SectionFilter } from "../../components/ui/SectionFilter";
import { Hero } from "../../components/layout/HeroShop";

import hero from "../../assets/img/hero-shop.jpeg";
import { Loader } from "../../components/ui/Loader";
import { ErrorPage } from "../ErrorPage";
import { useProducts } from "../../hooks/products";

import { limitState } from "../../states/limitState";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { Pagination } from "../../components/ui/PageNavigation/pagination";

export function Shop() {
  const limit = useRecoilValue(limitState);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useProducts({
    limit: `${limit}`,
    page: `${currentPage}`,
    sort: `asc`,
    sort_by: `updated_date`,
  });
  const products = data?.products;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <S.ShopContainer>
      <Hero image={hero} title="Shop" />
      <SectionFilter />
      <S.ShopProductsContainer>
        <ProductsSection products={products} />
        <S.ProductsNavigationContainer>
          <Pagination pages={data?.pages} onPageChange={handlePageChange} limit={limit}/>
        </S.ProductsNavigationContainer>
      </S.ShopProductsContainer>
      <StoreInfo />
    </S.ShopContainer>
  );
}
