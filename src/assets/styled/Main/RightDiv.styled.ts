import styled from "styled-components";

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 2 / span 2;
  padding: 48px 0px;
  @media (max-width: 1024px) {
    grid-column: span 6 / span 6;
  }
  @media (max-width: 768px) {
    grid-column: span 6 / span 6;
  }
  @media (max-width: 300px) {
    grid-column: span 6 / span 6;
  }
`;
