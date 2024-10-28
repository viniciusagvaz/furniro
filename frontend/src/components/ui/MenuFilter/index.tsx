import * as S from "./styles";

import filter from "../../../assets/icons/filter.svg";
import display from "../../../assets/icons/display.svg";
import listing from "../../../assets/icons/listing.svg";
import { useState } from "react";
import { limitState } from "../../../states/limitState";
import { useRecoilState, useRecoilValue } from "recoil";
import { Icon } from "../Icon";
import { Pipe } from "../Pipe";
import { selectedCategoryState } from "../../../states/selectedCategoryState";

export function MenuFilter({ totalProducts }) {
  const [showFilterModal, setFilterModal] = useState(false);
  const limit = useRecoilValue(limitState);
  const [selectedCategories, setSelectedCategories] = useRecoilState<number[]>(
    selectedCategoryState
  );

  const handleSelectCategory = (event) => {
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, event.target.value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== event.target.value)
      );
    }
  };



  const handleFilterModal = () => {
    setFilterModal(!showFilterModal);
  };

  return (
    <S.FilterMenu>
      <S.FilterButton onClick={handleFilterModal}>
        <img src={filter} alt={"filter button"} onClick={handleFilterModal} />
      </S.FilterButton>

      {showFilterModal && (
        <S.FilterModal
          id={"FilterModal"}
          name={"modal"}
          onClick={handleSelectCategory}
        >
          <S.Category>
            <label htmlFor="dining">Dining</label>
            <input type="checkbox" id={"dining"} name={"dining"} value={1} />
          </S.Category>
          <S.Category>
            <label htmlFor="living">Living</label>
            <input type="checkbox" id={"1"} name={"living"} value={2} />
          </S.Category>
          <S.Category>
            <label htmlFor="bedroom">Bedroom</label>
            <input type="checkbox" id={"bedroom"} name={"bedroom"} value={3} />
          </S.Category>
        </S.FilterModal>
      )}

      <S.FilterLabel htmlFor={"modal"}>Filter</S.FilterLabel>
      <Icon src={display} alt="display icon" />
      <Icon src={listing} alt="listing icon" />

      <Pipe width={"0"} height={"30px"} border={"1px solid #9d9d9d"} />

      <S.ItemsShown>
        Showing 1-{limit} of {totalProducts} results
      </S.ItemsShown>
    </S.FilterMenu>
  );
}
