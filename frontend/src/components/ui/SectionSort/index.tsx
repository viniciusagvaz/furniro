import * as S from "./styles";

import { MenuSort } from "../MenuSort";

export const SectionSort = ({ limit, totalProducts }) => {
  return (
    <S.SectionFilter>
      <div>
        Showing 1-{limit} of {totalProducts} results
      </div>
      <MenuSort />
    </S.SectionFilter>
  );
};
