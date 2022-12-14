import styled from "styled-components";
interface ILay{
  bgColor:string;
}
export const SidebarLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props:ILay)=>props.bgColor};
  z-index: 999;
  display: flex;
  flex-direction: column;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
`;
