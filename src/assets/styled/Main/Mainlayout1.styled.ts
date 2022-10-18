import styled from "styled-components";

export const MainStyledlayout1 = styled.div`
  width: 88%;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  margin-top: 80px;
  @media (max-width: 1024px) {
    margin-top: 80px;
  }
  @media (max-width: 768px) {
    margin-top: 16px;
  }
  @media (max-width: 300px) {
    margin-top: 16px;
  }
`;
