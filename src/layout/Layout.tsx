import { ReactNode } from "react";
import { LayoutStyled } from "../assets/styled/Layout.styled";
import { Nav } from "../components/Navbar/Nav";
import { RootState, useAppSelector } from "../redux/store/store";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer?.theme
  );

  return (
    <LayoutStyled
      className={`transition-all transform duration-300  ease-linear
       ${theme ? 'text-[#000]' : 'text-content'}`}
      theme={theme ? "#ffffff" : "#1f2028"}
    >
      <Nav />
      {children}
    </LayoutStyled>
  );
}
