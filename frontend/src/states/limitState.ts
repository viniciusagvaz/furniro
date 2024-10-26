import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { atom, useResetRecoilState } from "recoil";

export const limitState = atom({
  key: "LimitState",
  default: 16,  

});

export function ResetLimitState() {
  const resetLimit = useResetRecoilState(limitState);
  const location = useLocation();

  useEffect(() => {
    resetLimit();
  }, [location, resetLimit]);
}
