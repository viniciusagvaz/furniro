import logo from "../../assets/logos/logo.svg";
import * as S from "./styles";
import { Navbar } from "../Navbar";
import { AreaUser } from "../AreaUser";
import { ReactElement, ReactHTML } from "react";
import { HeaderLogo } from "../HeaderLogo";

export function Header(): ReactElement<ReactHTML> {
  return (
    <S.Header>
      <HeaderLogo logo={logo} />
      <Navbar />  
      <AreaUser/>
    </S.Header>
  );
}
