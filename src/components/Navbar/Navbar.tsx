import { DarkModeOutlined, LightModeOutlined, Menu } from "@mui/icons-material";
import { NavItems } from "../../assets/styled/Navbar/Navbar.styled";
import { Navlayout } from "../../assets/styled/Navbar/Navlayout.styled";
import {
  MenuButon,
  SwitchButon,
  SwitchDiv,
} from "../../assets/styled/Navbar/SwitchDiv.styled";
import { Logo } from "../../atoms/Main/Logo";
import { Navlink } from "../../atoms/Navbar/Navlink";
import { changeTheme } from "../../redux/reducers/changeThemeReducer";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store/store";
import { NavLogoLayout } from "./NavLogoLayout";

export interface INav {
  handleChange(): void;
  handleOpen(): void;
  token: string | null;
  details: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
  };
}

interface INavbar{
  changeOpen2:()=>void;
}

export function Navbar(props:INavbar) {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );
  const token: INav["token"] = localStorage.getItem("token");
  
  const dispatch = useAppDispatch();
  const handleChange: INav["handleChange"] = () => {
    dispatch(changeTheme(theme));
  };

  const details: Partial<INav["details"]> = JSON.parse(
    //@ts-ignore
    localStorage.getItem("details")
  );
  return (
    <Navlayout color={!theme ? "#fff" : "#000"}>
      <NavLogoLayout>
        <Logo text="ReadyPass" url="/" />
      </NavLogoLayout>
      <NavItems color={theme ? "#535661" : "#c0c0c0"}>
        <Navlink text="Blogs" url="#" />
        <Navlink text="Write" url="#" />
        <Navlink text="Wishlist" url="#" />
        {token ? (
          <Navlink text={details && details.username} url="#" />
        ) : (
         <>
          <Navlink text="Sign in" url="/login" />
          <Navlink text="Sign up" url="/register" />
         </>
        )}
      </NavItems>
      <SwitchDiv>
        <MenuButon onClick={() => props.changeOpen2()}>
          <Menu />
        </MenuButon>
        <SwitchButon
          borderHover={!theme ? "#fff" : "#000"}
          borderColor={!theme ? "#4b4c53" : " #9b9b9b"}
          onClick={() => handleChange()}
        >
          {!theme ? (
            <DarkModeOutlined className="rotate-12 " />
          ) : (
            <LightModeOutlined />
          )}
        </SwitchButon>
      </SwitchDiv>
    </Navlayout>
  );
}
