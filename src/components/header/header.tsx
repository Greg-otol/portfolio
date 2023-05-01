import {
  A,
  Article,
  HeaderContainer,
  Img,
  Li,
  Name,
  Nav,
  Section,
  Ul,
} from "../header/style_header";
import my_photo from "../../assets/img/eu.jpg";

export function Header() {
  return (
    <HeaderContainer>
      <Section>
        <Article>
          <Img src={my_photo} />
          <Name>Gregório Neto</Name>
        </Article>

        <Article>
          <Nav>
            <Ul>
              <Li>
                <A
                  href="https://www.linkedin.com/in/gregoriogeotol/"
                  target="blank"
                >
                  LinkedIn
                </A>
              </Li>
              <Li>
                <A href="https://github.com/Greg-otol" target="blank">
                  GitHub
                </A>
              </Li>
              <Li>
                <A href="#">Contato</A>
              </Li>
              <Li>
                <A href="#">Sobre</A>
              </Li>
            </Ul>
          </Nav>
        </Article>
      </Section>
    </HeaderContainer>
  );
}
