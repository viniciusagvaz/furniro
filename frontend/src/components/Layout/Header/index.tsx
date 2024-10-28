import logo from "../../../assets/logos/logo.svg";
import * as S from "./styles";
import { Navbar } from "../../ui/Navbar";
import { AreaUser } from "../../ui/AreaUser";
import { ReactElement, ReactHTML } from "react";
import { Logo } from "../../ui/HeaderLogo";

export function Header(): ReactElement<ReactHTML> {
  return (
    <S.Header>
      <Logo logo={logo} />
      <Navbar />
      <AreaUser />
    </S.Header>
  );
}
