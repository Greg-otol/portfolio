import {
  HeaderA,
  HeaderArticle,
  HeaderContainer,
  HeaderImg,
  HeaderLi,
  HeaderName,
  HeaderNav,
  HeaderSection,
  HeaderUl,
} from "../header/style_header";
import my_photo from "../../assets/img/eu.jpg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderSection>
        <HeaderArticle>
          <HeaderImg src={my_photo} />
          <HeaderName>Gregório Neto</HeaderName>
        </HeaderArticle>
        <HeaderArticle>
          <HeaderNav>
            <HeaderUl>
              <HeaderLi>
                <HeaderA
                  href="https://api.whatsapp.com/send?phone=5583999158969"
                  target="blank"
                >
                  Whatsapp
                </HeaderA>
              </HeaderLi>
              <HeaderLi>
                <HeaderA
                  href="https://www.linkedin.com/in/gregoriogeotol/"
                  target="blank"
                >
                  LinkedIn
                </HeaderA>
              </HeaderLi>
              <HeaderLi>
                <HeaderA 
                  href="mailto:gregoriogrgeotavia@hotmail.com" 
                  target="blank"
                >
                  Email
                </HeaderA>
              </HeaderLi>
              <HeaderLi>
                <HeaderA 
                  href="https://github.com/Greg-otol" 
                  target="blank"
                >
                  GitHub
                </HeaderA>
              </HeaderLi>
            </HeaderUl>
          </HeaderNav>
        </HeaderArticle>
      </HeaderSection>
    </HeaderContainer>
  );
}
