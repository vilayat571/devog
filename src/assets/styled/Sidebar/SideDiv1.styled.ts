import styled from "styled-components";

interface IBorder {
  borderHover: string;
  borderColor: string;
}

export const SideDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 32px;
  padding: 0px 24px;
`;

export const SideDiv1Div = styled.div`
  display: flex;
`;

export const CloseButon = styled.button`
  cursor: pointer;
  padding: 4px;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin: 0px 8px;
  border-width: 2px;
  border-color: ${(props: IBorder) => props.borderColor};
  border-radius: 100%;
  transition-duration: 100;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  &:hover {
    border-color: ${(props: IBorder) => props.borderHover};
  }
`;
