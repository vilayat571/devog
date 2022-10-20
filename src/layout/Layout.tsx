import { ReactNode } from "react";
import { LayoutStyled } from "../assets/styled/Layout/Layout.styled";
import { Nav } from "../components/Navbar/Nav";
import { RootState, useAppSelector } from "../redux/store/store";
import { Fotter } from "../components/Fotter/Fotter";
interface ILayout {
  children: ReactNode;
}

export function Layout({ children }: ILayout) {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer?.theme
  );

  return (
    <LayoutStyled
      theme={theme ? "#fff" : "#1f2028"}
      color={theme ? "#000" : "#fff"}
    >
      <Nav />
      {children}
      <hr className="w-full border-[#424453] my-12" />
      <Fotter />
    </LayoutStyled>
  );
}
