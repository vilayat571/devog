import styled from "styled-components";

interface IMain {
  bgColor: string;
}

export const Mainlayout2 = styled.div`
  width: 87.8%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 96px 64px;
  background-color: ${(props: IMain) => props.bgColor};
  border: none;
  outline: none;
  border-radius: 8px;
  @media (max-width: 1024px) {
    padding: 96px 64px;
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
  }

  @media (max-width: 300px) {
    padding: 32px 24px;
  }
`;

export const Mainlayout2Div1 = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column: span 2 / span 2;
  column-gap: 5rem;
  padding: 40px 0px 80px 0px;
  @media (max-width: 1024px) {
    column-gap: 5rem;
    padding: 40px 0px 80px 0px;
  }
  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 48px;
    padding-top: 0px;
  }
  @media (max-width: 300px) {
    gap: 1rem;
    padding-bottom: 48px;
    padding-top: 0px;
  }
`;

export const SuglingLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: span 1 / span 1;
  @media (max-width: 1024px) {
    grid-column: span 1 / span 1;
  }
  @media (max-width: 768px) {
    grid-column: span 2 / span 2;
  }
  @media (max-width: 300px) {
    grid-column: span 2 / span 2;
  }
`;

export const SuglingLayout1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: span 1 / span 1;
  @media (max-width: 1024px) {
    grid-column: span 1 / span 1;
  }
  @media (max-width: 768px) {
    grid-column: span 2 / span 2;
  }
  @media (max-width: 300px) {
    grid-column: span 2 / span 2;
  }
`;

//TextDivs

export const SuglingDiv = styled.div`
  font-size: 2rem;
  letter-spacing: 0.3px;
  @media (max-width: 1024px) {
    font-size: 1.85rem;
  }
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  @media (max-width: 300px) {
    font-size: 1.75rem;
  }
`;

export const SuglingDiv1 = styled.div`
  font-size: 2rem;
  letter-spacing: 0.3px;
  color: #a9adc1;
  @media (max-width: 1024px) {
    font-size: 1.85rem;
  }
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  @media (max-width: 300px) {
    font-size: 1.75rem;
  }
`;
