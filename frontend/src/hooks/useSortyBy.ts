import { useState } from "react";

export const useSortBy = () => {
  const [sortBy, setSortBy] = useState();

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
    return sortBy;
  };


  return { sortBy, handleSortBy };
};