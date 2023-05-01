import styled from "styled-components";

export const HeaderContainer = styled.header`

`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  width: 100%;
  height: 110px;

  @media (max-width: 590px) {
    flex-direction: column;
    padding-top: 10px;
    gap: 10px;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  gap: 10px;
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const Nav = styled.nav``;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style: none;
`;

export const Li = styled.li``;

export const A = styled.a`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: rgb(0, 175, 239);
  cursor: pointer;
`;
