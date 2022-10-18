import styled from "styled-components";

interface IProps {
  theme: string;
  color: string;
}

export const LayoutStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  color: ${(props: IProps) => props.color};
  background-color: ${(props: IProps) => props.theme};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
`;
