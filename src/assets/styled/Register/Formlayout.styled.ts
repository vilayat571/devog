import styled from "styled-components";

export const Formlayout = styled.form`
  width: 100%;
  height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: auto;
    padding: 40px 0px;
  }
  @media (max-width: 300px) {
    height: auto;
    padding: 40px 0px;
  } ;
`;
