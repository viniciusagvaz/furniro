import * as S from "./styles";

import { MenuSort } from "../MenuSort";
import { MenuFilter } from "../MenuFilter";

export const SectionFilter = ({totalProducts}) => {

  return (
    <S.SectionFilter>
      <MenuFilter totalProducts={totalProducts}/>
      <MenuSort />
    </S.SectionFilter>
  );
};
