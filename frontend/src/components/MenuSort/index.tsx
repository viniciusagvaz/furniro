import * as S from "./styles";

export function MenuSort() {
  return (
    <S.FilterSorting>
      <label htmlFor="limit">Show</label>
      <select name="limit">
        <option value="limit">16</option>
      </select>

      <label htmlFor="sortBy">Sort by</label>
      <select name="sortBy">
        <option value="price">Default</option>
        <option value="price">$ highest-lowest</option>
        <option value="price">$ lowest-highest</option>
      </select>
    </S.FilterSorting>
  );
}
