import * as S from "./styles";

import { SectionTitle } from "../TitleSection";
import { CardCategory } from "../CardCategory";
import { ErrorPage } from "../../pages/ErrorPage";
import { useCategories } from "../../hooks/categories";
import { Loader } from "../Loader";

interface CategoryProps {
  id: number;
  name: string;
  image_link: string;
}

export function CategoriesSection() {
  const { categories, isLoading, isError } = useCategories();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <S.CategoriesSection>
      <SectionTitle children="Browse The Range" fontSize="2rem" />

      <S.CategoriesContent>
        {categories.map((category: CategoryProps) => (
          <CardCategory key={category.id} {...category} />
        ))}
      </S.CategoriesContent>
    </S.CategoriesSection>
  );
}
