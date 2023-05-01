import styled from "styled-components";

export const FooterContainer = styled.footer`
  /* position: absolute;
  bottom: 0; */
  width: 100%;
  height: auto;
  padding: 50px 10px 10px 10px;
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
`;

export const FooterTitle = styled.h2`
  font-size: 18px;
  color: white;
`;

export const FooterUl = styled.ul`
  list-style: none;
`;

export const FooterLi = styled.li`
  margin: 5px;
`;

export const FooterA = styled.a`
  font-size: 14px;
  color: white;
  cursor: pointer;

  &:hover {
    color: rgb(0, 175, 239);
  }
`;

export const FooterImg = styled.img`
  width: 20%;

  @media (max-width: 720px) {
    width: 50%;
  }
`;

export const FooterCopyright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

export const FooterP = styled.p`
  font-size: 14px;
  color: white;
`;
