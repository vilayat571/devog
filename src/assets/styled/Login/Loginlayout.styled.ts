import styled from "styled-components";

export const LoginLayout = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 48px 0px;
    height: auto;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 48px 0px;
    height: auto;
  }
  @media (max-width: 300px) {
    flex-direction: column;
    padding: 48px 0px;
    height: auto;
  } ;
`;
