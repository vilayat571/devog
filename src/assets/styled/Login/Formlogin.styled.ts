import styled from "styled-components";

export const Formlogin = styled.form`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 30px;
  @media (max-width: 1024px) {
    width: 55%;
  }
  @media (max-width: 768px) {
    width: 88%;
  }
  @media (max-width: 300px) {
    width: 88%;
  } ;
`;
