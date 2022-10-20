import {
  DarkModeOutlined,
  LightModeOutlined,
  Menu,
  CloseOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { NavItems } from "../../assets/styled/Navbar/Navbar.styled";
import {
  MenuButon,
  SwitchButon,
  SwitchDiv,
} from "../../assets/styled/Navbar/SwitchDiv.styled";
import { Logo } from "../../atoms/Main/Logo";
import { Navlink } from "../../atoms/Navbar/Navlink";
import { StartedLink } from "../../atoms/Navbar/StartedLink";
import { changeTheme } from "../../redux/reducers/changeThemeReducer";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../redux/store/store";
import { NavLogoLayout } from "./NavLogoLayout";
import { Sidebar } from "./Sidebar";

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

export function Nav() {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleChange: INav["handleChange"] = () => {
    dispatch(changeTheme(theme));
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const token: INav["token"] = localStorage.getItem("token");

  const details: Partial<INav["details"]> = JSON.parse(
    //@ts-ignore
    localStorage.getItem("details")
  );

  return (
    <>
      {open ? (
        <Sidebar changeOpen={() => handleOpen()} open={open} />
      ) : (
        <div
          className={`transition-all transform duration-500 ease-in
          w-full h-32 sm:px-6 md:px-6 xl:px-20 lg:px-20 xl:pt-12 lg:pt-12 py-5
       ${!theme ? "text-content" : "text-black"}
         flex justify-between items-center `}
        >
          <NavLogoLayout>
            <Logo text="ReadyPass" url="/" />
          </NavLogoLayout>
          <NavItems color={theme ? "#535661" : "#c0c0c0"}>
            <Navlink text="Blogs" url="#" />
            <Navlink text="Write" url="#" />
            <Navlink text="Wishlist" url="#" />
            <Navlink text="Interview" url="#" />
            <Navlink text="Write questions" url="#" />
            {token ? (
              <Navlink text={details && details.username} url="#" />
            ) : (
              <StartedLink text="Get started" url="/login" />
            )}
          </NavItems>
          <SwitchDiv>
            <MenuButon onClick={() => handleOpen()}>
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
        </div>
      )}
    </>
  );
}
