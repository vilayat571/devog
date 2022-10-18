import styled from "styled-components";

interface IProps {
  theme: string;
}

export const LayoutStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props: IProps) => props.theme};
`;
