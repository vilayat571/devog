import { ReactNode } from "react";
import { LayoutStyled } from "../assets/styled/Layout/Layout.styled";
import Fotter from "../components/Fotter/Fotter";
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
       ${theme ? "text-[#000]" : "text-content"}`}
      theme={theme ? "#ffffff" : "#1f2028"}
    >
      <Nav />
      {children}
      <hr className="w-full border-[#424453] my-12" />
      <Fotter />
    </LayoutStyled>
  );
}
