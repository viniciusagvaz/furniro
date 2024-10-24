import { useRecoilState } from "recoil";

import * as S from "./styles";
import { sortByPriceState } from "../../states/sortByPrice";
import { limitState } from "../../states/limitState";

export function MenuSort() {
  const [sortByPrice, setSortByPrice] = useRecoilState(sortByPriceState);
  const [limit, setLimit] = useRecoilState(limitState);

  const handleSortByPrice = (e) => {
    setSortByPrice(e.target.value);
  };

  const handleLimit = (e) => {
    setLimit(e.target.value);
  };

  return (
    <S.FilterSorting>
      <label htmlFor="limit">Show</label>
      <select name="limit" onChange={handleLimit} value={limit}>
        <option value={16}>16</option>
        <option value={32}>32</option>
      </select>

      <label htmlFor="sortBy">Sort by</label>
      <select name="sortBy" onChange={handleSortByPrice} value={sortByPrice}>
        <option value="price">Default</option>
        <option value="ASC">$ lowest-highest</option>
        <option value="DESC">$ highest-lowest</option>
      </select>
    </S.FilterSorting>
  );
}
