import styled from "styled-components";
interface IDiv2 {
  color: string;
}
export const SideDiv2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export const SideDiv2Layout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  height: auto;
  letter-spacing: 0.8px;
  font-size: 16px;
  color: ${(props: IDiv2) => props.color};
`;
