import * as S from "./styles";

import { ProductsSection } from "../../components/SectionProduct";
import { StoreInfo } from "../../components/InfoStore";
import { SectionFilter } from "../../components/SectionFilter";
import { Hero } from "../../components/HeroShop";

import hero from "../../assets/img/hero-shop.jpeg";
import { Button } from "../../components/Buttons";
import { Loader } from "../../components/Loader";
import { ErrorPage } from "../ErrorPage";
import { useProducts } from "../../hooks/products";
import { useRecoilValue } from "recoil";
import { limitState } from "../../states/limitState";
// import { sortByPriceState } from "../../states/sortByPrice";

export function Shop() {
  // const sort = useRecoilValue(sortByPriceState);

const { data, isLoading, isError } = useProducts({
    limit: `${ useRecoilValue(limitState) }`,
    page: "1",
    sort: `asc`,
    sort_by: `updated_date`,
  });


  const products = data?.products;

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
          <Button variant={"navigation"} children={"Next"} />
          <Button variant={"navigation"} children={"Next"} />
          <Button variant={"navigation"} children={"Next"} />
        </S.ProductsNavigationContainer>
      </S.ShopProductsContainer>
      <StoreInfo />
    </S.ShopContainer>
  );
}
