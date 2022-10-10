import  { ReactNode } from "react";
import { LayoutStyled } from "../assets/styled/Layout.styled";
import { Nav } from "../components/Navbar/Nav";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <LayoutStyled>
      <Nav />
      {children}
    </LayoutStyled>
  );
}
