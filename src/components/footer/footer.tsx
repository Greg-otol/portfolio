import {
  FooterA,
  FooterContainer,
  FooterCopyright,
  FooterImg,
  FooterLi,
  FooterP,
  FooterSection,
  FooterTitle,
  FooterUl,
} from "./style_footer";
import logo from "../../assets/img/my-logo.png";

export function Footer() {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterUl>
          <FooterTitle>Contato</FooterTitle>
          <FooterLi>
            <FooterA>Whatsapp</FooterA>
          </FooterLi>
          <FooterLi>
            <FooterA>LinkedIn</FooterA>
          </FooterLi>
          <FooterLi>
            <FooterA>Email</FooterA>
          </FooterLi>
        </FooterUl>

        <FooterUl>
          <FooterTitle>Meus projetos</FooterTitle>
          <FooterLi>
            <FooterA>GitHub</FooterA>
          </FooterLi>
          <FooterLi>
            <FooterA>Blog</FooterA>
          </FooterLi>
        </FooterUl>
      </FooterSection>

      <FooterSection>
        <FooterCopyright>
          <FooterImg src={logo} />
          <FooterP>&copy; 2023</FooterP>
        </FooterCopyright>
      </FooterSection>
    </FooterContainer>
  );
}
