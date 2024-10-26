import * as S from "./styles";

import { MenuSort } from "../MenuSort";
import { MenuFilter } from "../MenuFilter";

export const SectionFilter = () => {

  return (
    <S.SectionFilter>
      <MenuFilter />
      <MenuSort />
    </S.SectionFilter>
  );
};
