import styled from "styled-components";
interface INavbar {
  color: string;
}
export const NavItems = styled.nav`
  display: flex;
  width: 60%;
  letter-spacing: 0.8px;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  align-items: center;
  color: ${(props: INavbar) => props.color};
  @media (max-width: 1024px) {
    display: flex;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 300px) {
    display: none;
  }
`;

/* {`sm:hidden md:hidden lg:flex xl:flex ${
          !theme ? "text-nav" : "text-blackContent"
        } `} */
