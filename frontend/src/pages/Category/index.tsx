import * as S from "./styles";

import { ProductsSection } from "../../components/products/SectionProduct";
import { Hero } from "../../components/layout/HeroShop";
import { StoreInfo } from "../../components/ui/InfoStore";

import { useParams } from "react-router-dom";
import { SectionSort } from "../../components/ui/SectionSort";
import { Loader } from "../../components/ui/Loader";
import { ErrorPage } from "../ErrorPage";
import { useProducts } from "../../hooks/products";
import { useCategories } from "../../hooks/categories";
import { useRecoilValue } from "recoil";
import { limitState } from "../../states/limitState";
import { Products } from "../../interfaces/products.interface";
import { Pagination } from "../../components/ui/PageNavigation/pagination";
import { useState } from "react";

interface Category {
  id: number;
  name: string;
  image_link: string;
}

export function Category() {
  const [currentPage, setCurrentPage] = useState(1);
  const { categoryId } = useParams();
  const { categories } = useCategories();
  const limit = useRecoilValue(limitState);
  
  const { data, isLoading, isError } = useProducts({
    limit: `${limit}`,
    page: `${currentPage}`,
    sort: "asc",
    sort_by: "price",
  });
  console.log(data.products)


  const products = data?.products.filter(
    (product: Products) => product.category_id === Number(categoryId)
  );
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const category = categories?.find((cat: Category) => {
    return cat.id === Number(categoryId);
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <S.CategoryContainer>
      <Hero image={category?.image_link} title={category?.name} />
      <SectionSort />
      <S.CategoryProductsContainer>
        <ProductsSection products={products} />
        <S.ProductsNavigationContainer>
        <Pagination pages={data?.pages} onPageChange={handlePageChange} limit={limit}/>
        </S.ProductsNavigationContainer>
      </S.CategoryProductsContainer>
      <StoreInfo />
    </S.CategoryContainer>
  );
}
