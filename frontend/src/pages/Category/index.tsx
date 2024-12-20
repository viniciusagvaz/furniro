import * as S from "./styles";

import { ProductsSection } from "../../components/products/SectionProduct";
import { Hero } from "../../components/layout/HeroShop";
import { StoreInfo } from "../../components/ui/InfoStore";
import { Pagination } from "../../components/ui/PageNavigation/pagination";
import { SectionSort } from "../../components/ui/SectionSort";
import { Loader } from "../../components/ui/Loader";

import { ErrorPage } from "../ErrorPage";
import { limitState } from "../../states/limitState";
import { useFetch } from "../../hooks/useFetch";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { useState } from "react";

interface Category {
  id: number;
  name: string;
  image_link: string;
}

export function Category() {
  const [currentPage, setCurrentPage] = useState(1);
  const { categoryId } = useParams();
  const limit = useRecoilValue(limitState);

  const {
    data: category,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useFetch(
    {
      categories: `${categoryId}`,
    },
    `categories/image/${categoryId}`
  );
  const currentCategory = category;

  const { data, isLoading, isError } = useFetch(
    {
      limit: `${limit}`,
      page: `${currentPage}`,
      sort: "asc",
      sort_by: "price",
    },
    `products/category/${categoryId}`
  );

  const categoryProducts = data?.products;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (currentPage > data?.pages) {
    setCurrentPage(1);
  }

  if (isLoading || categoryLoading) {
    return <Loader />;
  }

  if (isError || categoryError) {
    return <ErrorPage />;
  }

  return (
    <S.CategoryContainer>
      <Hero image={currentCategory?.image_link} title={currentCategory?.name} />

      <SectionSort limit={limit} totalProducts={data?.totalProducts} />
      <S.CategoryProductsContainer>
        <ProductsSection products={categoryProducts} />
        <S.ProductsNavigationContainer>
          <Pagination
            pages={data?.pages}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </S.ProductsNavigationContainer>
      </S.CategoryProductsContainer>
      <StoreInfo />
    </S.CategoryContainer>
  );
}
