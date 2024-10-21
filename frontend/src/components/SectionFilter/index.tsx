import * as S from "./styles";

export const SectionFilter = () => {
  const handleFilterModal = () => {
    console.log("filter modal");
  };


  // const handleQuantities = () => {
  //   console.log("quantities");
  // };

  // const handleSort = () => {
  //   console.log("sort");
  // };

  // const handleView = () => {
  //   console.log("view");
  // };

  return (
    <S.SectionFilter>
      <S.FilterMenu>
        <img
          src="#"
          alt=""
          style={{ width: "22px", height: "22px" }}
          onClick={handleFilterModal}
        />

        <article>
          <span>
            <input type="checkbox" id={"dining"} name={"dining"} />
            <label htmlFor="dining">dining</label>
          </span>
          <span>
            <input type="checkbox" id={"dining"} name={"dining"} />
            <label htmlFor="dining">dining</label>
          </span>
          <span>
            <input type="checkbox" id={"dining"} name={"dining"} />
            <label htmlFor="dining">dining</label>
          </span>
        </article>

        <p>Filter</p>
        <img src="#" alt="" style={{ width: "22px", height: "22px" }} />
        <img src="#" alt="" style={{ width: "22px", height: "22px" }} />

        <span id="Pipe"></span>

        <p>Showing 1-16 of 32 results</p>
      </S.FilterMenu>

      <S.FilterSorting>
        <label>Show</label>
        <select name="sort">
          <option value="price">16</option>
        </select>

        <label>Sort by</label>
        <select name="sort">
          <option value="price">Default</option>
          <option value="price">$ highest-lowest</option>
          <option value="price">$ lowest-highest</option>
          <option value="price"></option>
        </select>
      </S.FilterSorting>
    </S.SectionFilter>
  );
};
