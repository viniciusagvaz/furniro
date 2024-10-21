import React from 'react';
import * as S from './styles';
import { TitleBrand } from '../TitleBrand';

interface LogoProps {
  logo: string;
}

export const HeaderLogo: React.FC<LogoProps> = ({ logo }) => {
  return (
    <S.Logo>
      <S.LogoImage src={logo} alt="Logo" width="3.5rem" />
      <TitleBrand fontSize="2rem" />
    </S.Logo>
  );
};
