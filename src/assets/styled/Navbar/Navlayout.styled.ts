import styled from "styled-components";
interface INav {
  color: string;
}
export const Navlayout = styled.div`
  width: 100%;
  height: 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 80px 0px 80px;
  color: ${(props: INav) => props.color};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  @media (max-width: 1024px) {
    padding: 0px 80px;
  }
  @media (max-width: 768px) {
    padding: 0px 24px;
  }
  @media (max-width: 300px) {
    padding: 0px 24px;
  }
`;
