import styled from "styled-components";

export const FormRegister = styled.form`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 300px) {
    width: 91%;
  } ;
`;
