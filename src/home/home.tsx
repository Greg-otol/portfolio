import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import {
  HomeSection,
  HomeContainer,
  HomeH3,
  HomeP,
  HomeUl,
  HomeLi,
  HomeA,
} from "./style_home";

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <HomeSection>
        <HomeH3></HomeH3>
        <HomeP>
          Sou Gregório,
          <br />
          Desenvolvedor Fullstack com principais habilidades em React,
          Typescript, NodeJS e C# (Entity Framework), hoje estou atuando como
          Freelancer em Cachoeira dos Índios - Paraíba
        </HomeP>
      </HomeSection>

      <HomeSection>
        <HomeH3>Habilidades e conhecimentos:</HomeH3>
        <HomeUl>
          <HomeLi>• React</HomeLi>
          <HomeLi>• Typescript</HomeLi>
          <HomeLi>• NodeJS</HomeLi>
          <HomeLi>• C# (Entity Framework)</HomeLi>
          <HomeLi>• ExpressJS</HomeLi>
          <HomeLi>• NestJS</HomeLi>
          <HomeLi>• PostgreSQL</HomeLi>
          <HomeLi>• SQL Server</HomeLi>
          <HomeLi>• MySQL</HomeLi>
          <HomeLi>• MongoDB</HomeLi>
          <HomeLi>• Java (Estudando no programa Start Capgemini)</HomeLi>
          <HomeLi>• Angular (Estudando no programa Start Capgemini)</HomeLi>
        </HomeUl>
      </HomeSection>

      <HomeSection>
        <HomeH3>Certificados:</HomeH3>
        <HomeUl>
          <HomeLi>
            <HomeA
              href="https://www.udemy.com/certificate/UC-d2598b6c-ab55-4105-b685-fe2eaa472037/"
              target="blank"
            >
              • Fullstack Developer Mod 6 Bootcamp II - BlueEdTech
            </HomeA>
          </HomeLi>
          <HomeLi>
            <HomeA
              href="https://www.udemy.com/certificate/UC-d2598b6c-ab55-4105-b685-fe2eaa472037/"
              target="blank"
            >
              • Fullstack Developer Mod 6 Bootcamp I - BlueEdTech
            </HomeA>
          </HomeLi>
          <HomeLi>
            <HomeA
              href="https://www.udemy.com/certificate/UC-d2598b6c-ab55-4105-b685-fe2eaa472037/"
              target="blank"
            >
              • Fullstack Developer Mod 5 - BlueEdTech
            </HomeA>
          </HomeLi>
          <HomeLi>
            <HomeA
              href="https://www.udemy.com/certificate/UC-d2598b6c-ab55-4105-b685-fe2eaa472037/"
              target="blank"
            >
              • Fullstack Developer Mod 4 - BlueEdTech
            </HomeA>
          </HomeLi>
          <HomeLi>
            <HomeA
              href="https://www.udemy.com/certificate/UC-d2598b6c-ab55-4105-b685-fe2eaa472037/"
              target="blank"
            >
              • Fullstack Developer Mod 3 - BlueEdTech
            </HomeA>
          </HomeLi>
          <HomeLi>
            <HomeA
              href="https://www.udemy.com/certificate/UC-d2598b6c-ab55-4105-b685-fe2eaa472037/"
              target="blank"
            >
              • Web Banco de Dados/Cloud Mod 2 - BlueEdTech
            </HomeA>
          </HomeLi>
          <HomeLi>
            <HomeA
              href="https://www.udemy.com/certificate/UC-d2598b6c-ab55-4105-b685-fe2eaa472037/"
              target="blank"
            >
              • Lógica de Programação Mod 1 - BlueEdTech
            </HomeA>
          </HomeLi>
          <HomeLi>
            <HomeA
              href="https://www.udemy.com/certificate/UC-d2598b6c-ab55-4105-b685-fe2eaa472037/"
              target="blank"
            >
              • .Net 6 Web Api - Profº Stephany Henrique de Almeida Batista
            </HomeA>
          </HomeLi>
        </HomeUl>
      </HomeSection>

      <Footer />
    </HomeContainer>
  );
}
