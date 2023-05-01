import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
`;

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 200px 10px 200px;

  @media (max-width: 700px) {
    padding: 40px 30px 10px 30px;
  }
`;

export const HomeH3 = styled.h3`
  color: white;
`;

export const HomeP = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: start;
  color: white;
`;

export const HomeUl = styled.ul`
  list-style: none;
`;

export const HomeLi = styled.li`
  color: white;
  padding-left: 10px;
`;

export const HomeA = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    color: rgb(0, 175, 239);
  }
`;
