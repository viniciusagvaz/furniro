import { TitleBrand } from "../TitleBrand";
import { MenuItem } from "../MenuItem";
import { Newsletter } from "../Newsletter";
import * as S from "./styles";

export function Footer(): JSX.Element {
  return (
    <S.Footer>
      <S.FooterMain>
        <S.FooterLeft>
          <TitleBrand fontSize={"1.2rem"}/>
          <S.Address>
            400 University Drive Suite 200 Coral Gables,
            <div>FL 33134 USA</div>
          </S.Address>
        </S.FooterLeft>

        <S.Menu>
          <S.Title>Links</S.Title>
          <MenuItem path={"home"} children={"Home"} />
          <MenuItem path={"shop"} children={"Shop"} />
          <MenuItem path={"invalid-path"}  children={"About"} />
          <MenuItem path={"invalid-path"} children={"Contact"} />
        </S.Menu>

        <S.Menu>
          <S.Title>Help</S.Title>
          <MenuItem path={"invalid-path"} children={"Payment Methods"} />
          <MenuItem path={"invalid-path"} children={"Returns"} />
          <MenuItem path={"invalid-path"} children={"Privacy Policy"} />
        </S.Menu>

        <S.NewsletterContent>
          <S.Title>Newsletter</S.Title>
          <Newsletter />
        </S.NewsletterContent>
      </S.FooterMain>

      <S.FooterBottom>
        <S.Copyright>
          {new Date().getFullYear()} furnrio.  All rights reverved ©
        </S.Copyright>
      </S.FooterBottom>
    </S.Footer>
  );
}
