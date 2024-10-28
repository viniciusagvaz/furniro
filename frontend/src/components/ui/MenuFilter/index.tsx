import * as S from "./styles";

import filter from "../../../assets/icons/filter.svg";
import display from "../../../assets/icons/display.svg";
import listing from "../../../assets/icons/listing.svg";
import { useState } from "react";
import { limitState } from "../../../states/limitState";
import { useRecoilValue } from "recoil";
import { Icon } from "../Icon";

export function MenuFilter({ totalProducts }) {
  const [showFilterModal, setFilterModal] = useState(false);
  const limit = useRecoilValue(limitState);

  const handleFilterModal = () => {
    setFilterModal(!showFilterModal);
  };

  return (
    <S.FilterMenu>
      <S.FilterButton onClick={handleFilterModal}>
        <img src={filter} alt={"filter button"} onClick={handleFilterModal} />
      </S.FilterButton>

      {showFilterModal && (
        <S.FilterModal id={"FilterModal"} name={"modal"}>
          <S.Category>
            <label htmlFor="dining">Dining</label>
            <input type="checkbox" id={"dining"} name={"dining"} />
          </S.Category>
          <S.Category>
            <label htmlFor="living">Living</label>
            <input type="checkbox" id={"living"} name={"living"} />
          </S.Category>
          <S.Category>
            <label htmlFor="bedroom">Bedroom</label>
            <input type="checkbox" id={"bedroom"} name={"bedroom"} />
          </S.Category>
        </S.FilterModal>
      )}

      <S.FilterLabel htmlFor={"modal"}>Filter</S.FilterLabel>
      <Icon src={display} alt="display icon" />
      <Icon src={listing} alt="listing icon" />

      <span className={"pipe"} />

      <S.ItemsShown>
        Showing 1-{limit} of {totalProducts} results
      </S.ItemsShown>
    </S.FilterMenu>
  );
}
