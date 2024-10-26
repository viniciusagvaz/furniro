import { atom } from "recoil";

export const sortByPriceState = atom({
  key: "SortByPrice",
  default: 'asc',
});

