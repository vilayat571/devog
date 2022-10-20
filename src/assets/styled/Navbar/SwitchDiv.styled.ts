import styled from "styled-components";

interface IBorder {
  borderHover: string;
  borderColor: string;
}

export const SwitchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuButon = styled.button`
  font-size: 30px;
  cursor: pointer;
  border: 2px solid #4b4c53;
  padding: 4px;
  width: 56px;
  height: 56px;
  margin: 0px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  display: none;
  transition-duration: 200;
  transition-timing-function: ease;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  &:hover {
    border: 2px solid #fff;
  }
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 300px) {
    display: block;
  }
`;

export const SwitchButon = styled.button`
  font-size: 30px;
  cursor: pointer;
  border-color: ${(props: IBorder) => props.borderColor};
  border-width: 2px;
  border-style: solid;
  padding: 4px;
  width: 56px;
  height: 56px;
  margin: 0px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 200;
  transition-timing-function: ease;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  &:hover {
    border-color: ${(props: IBorder) => props.borderHover};
    border-width: 2px;
    border-style: solid;
  }
`;
