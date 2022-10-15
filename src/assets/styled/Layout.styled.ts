import styled from "styled-components";

interface IProps {
  theme: string;
}

export const LayoutStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props: IProps) => props.theme};
`;
