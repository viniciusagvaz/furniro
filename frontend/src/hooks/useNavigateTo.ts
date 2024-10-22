import { useNavigate } from "react-router-dom";

export const useNavigateTo = (path: string, element?: HTMLElement) => {
  const navigate = useNavigate();
  window.scrollTo(element?.offsetLeft ?? 0, element?.offsetTop ?? 0);

  return () => {
    navigate(path);
  };
};
