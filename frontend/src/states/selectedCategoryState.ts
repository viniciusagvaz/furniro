import { atom } from "recoil";

export const selectedCategoryState = atom({
  key: "SelectedCategory",
  default: [] as number[],
});
