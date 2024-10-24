import { atom } from "recoil";

export const limitState = atom({
  key: "LimitState",
  default: 16,
});
