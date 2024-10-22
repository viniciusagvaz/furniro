import * as S from "./styles";

import filter from "../../assets/icons/filter.svg";
import display from "../../assets/icons/display.svg";
import listing from "../../assets/icons/listing.svg";
import { useState } from "react";

export function MenuFilter() {
  const [showFilterModal, setFilterModal] = useState(false);

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
      <img src={display} alt="" style={{ width: "22px", height: "22px" }} />
      <img src={listing} alt="" style={{ width: "22px", height: "22px" }} />

      <span className={"pipe"} />

      <S.ItemsShown>Showing 1-16 of 32 results</S.ItemsShown>
    </S.FilterMenu>
  );
}
