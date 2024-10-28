import * as S from "./styles";

import { ProductsSection } from "../../components/products/SectionProduct";
import { StoreInfo } from "../../components/ui/InfoStore";
import { SectionFilter } from "../../components/ui/SectionFilter";
import { Hero } from "../../components/layout/HeroShop";

import hero from "../../assets/img/hero-shop.jpeg";
import { Loader } from "../../components/ui/Loader";
import { ErrorPage } from "../ErrorPage";
import { useFetch } from "../../hooks/useFetch";

import { limitState } from "../../states/limitState";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { Pagination } from "../../components/ui/PageNavigation/pagination";
import { sortByPriceState } from "../../states/sortByPrice";

export function Shop() {
  const limit = useRecoilValue(limitState);
  const sort = useRecoilValue(sortByPriceState);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useFetch({
    limit: `${limit}`,
    page: `${currentPage}`,
    sort: `${sort}`,
    sort_by: "price",
    categoryIds: [],
  });
  const products = data?.products;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (currentPage > data?.pages) {
    setCurrentPage(1);
  }

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <S.ShopContainer>
      <Hero image={hero} title="Shop" />
      <SectionFilter totalProducts={data?.totalProducts} />
      <S.ShopProductsContainer>
        <ProductsSection products={products} />
        <S.ProductsNavigationContainer>
          <Pagination
            pages={data?.pages}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </S.ProductsNavigationContainer>
      </S.ShopProductsContainer>
      <StoreInfo />
    </S.ShopContainer>
  );
}
