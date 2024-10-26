import { atom } from "recoil";

export const filterByCategoryState  = atom({
  key: "FilterByCategory",
  default: 'all',
});

