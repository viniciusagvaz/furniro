import * as S from "./styles";

import { ProductsSection } from "../../components/products/SectionProduct";
import { StoreInfo } from "../../components/ui/InfoStore";
import { SectionFilter } from "../../components/ui/SectionFilter";
import { Hero } from "../../components/layout/HeroShop";

import hero from "../../assets/img/hero-shop.jpeg";
import { Button } from "../../components/ui/Buttons";
import { Loader } from "../../components/ui/Loader";
import { ErrorPage } from "../ErrorPage";
import { useProducts } from "../../hooks/products";

import { limitState } from "../../states/limitState";
import { useRecoilValue } from "recoil";


export function Shop() {
  const limit = useRecoilValue(limitState);
  const { data, isLoading, isError } = useProducts({
    limit: `${limit}`,
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

  const handlePagination = () => {
    console.log("next");
  };

  return (
    <S.ShopContainer>
      <Hero image={hero} title="Shop" />
      <SectionFilter />
      <S.ShopProductsContainer>
        <ProductsSection products={products} />
        <S.ProductsNavigationContainer>
          <div>
            {data.pages > 1 && (
              <Button
                variant={"navigation"}
                children={"Prev"}
                onClick={handlePagination}
              />
            )}
          </div>
        </S.ProductsNavigationContainer>
      </S.ShopProductsContainer>
      <StoreInfo />
    </S.ShopContainer>
  );
}
