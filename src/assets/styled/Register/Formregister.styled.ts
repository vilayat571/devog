import styled from "styled-components";

export const FormRegister = styled.form`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
