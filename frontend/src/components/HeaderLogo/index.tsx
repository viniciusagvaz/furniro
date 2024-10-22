import React from "react";
import * as S from "./styles";
import { TitleBrand } from "../TitleBrand";
import { useNavigate } from "react-router-dom";

interface LogoProps {
  logo: string;
}

export const HeaderLogo: React.FC<LogoProps> = ({ logo }) => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <S.Logo onClick={handleNavigate}>
        <S.LogoImage src={logo} alt="Logo" width="3.5rem" />
        <TitleBrand fontSize="2rem" />
    </S.Logo>
  );
};
