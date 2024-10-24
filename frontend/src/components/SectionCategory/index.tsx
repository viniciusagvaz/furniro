import * as S from "./styles";

import { SectionTitle } from "../TitleSection";
import { CardCategory } from "../CardCategory";
import { useGetCategories } from "../../hooks/useGetCategories";

interface CategoryProps {
  id: number;
  name: string;
  image_link: string;
}

export function CategoriesSection() {
  const { categories, loading } = useGetCategories();

  if (loading) {
    return (
      <S.CategoriesSection>
        <SectionTitle children="Loading..." fontSize="2rem" />
      </S.CategoriesSection>
    );
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
