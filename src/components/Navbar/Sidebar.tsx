import { useState } from "react";
import { Link } from "react-router-dom";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../redux/store/store";
import { INav } from "./Nav";
import {
  DarkModeOutlined,
  LightModeOutlined,
  CloseOutlined,
} from "@mui/icons-material";
import { changeTheme } from "../../redux/reducers/changeThemeReducer";
import { SidebarLayout } from "../../assets/styled/Sidebar/SidebarLayout.styled";
import {
  CloseButon,
  SideDiv1,
  SideDiv1Div,
} from "../../assets/styled/Sidebar/SideDiv1.styled";
import { SideDiv2 } from "../../assets/styled/Sidebar/SideDiv2.styled";
import { Sidelink } from "../../atoms/Sidebar/Sidelink";

interface ISidebar {
  open: boolean;
  changeOpen: () => void;
}
export function Sidebar(props: ISidebar) {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );

  const dispatch = useAppDispatch();

  const handleChange: INav["handleChange"] = () => {
    dispatch(changeTheme(theme));
  };

  const token: INav["token"] = localStorage.getItem("token");

  const details: Partial<INav["details"]> = JSON.parse(
    //@ts-ignore
    localStorage.getItem("details")
  );

  return (
    <SidebarLayout>
      <SideDiv1>
        <Link
          className={`text-[1.5rem] tracking-[1px] w-0 group-hover:w-auto  border-b-2 py-1  font-bold
  ${
    !theme
      ? "group-hover:border-content border-theme"
      : "group-hover:border-theme border-content"
  }`}
          to={"/"}
        >
          S.Vilayat
        </Link>
        <SideDiv1Div>
          <CloseButon
            borderHover={!theme ? "#fff" : "#000"}
            borderColor={!theme ? " #4b4c53 " : " #9b9b9b"}
            onClick={() => props.changeOpen()}
          >
            <CloseOutlined />
          </CloseButon>
          <CloseButon
            borderHover={!theme ? "#fff" : "#000"}
            borderColor={!theme ? " #4b4c53 " : " #9b9b9b"}
            onClick={() => handleChange()}
          >
            {!theme ? (
              <DarkModeOutlined className="rotate-12" />
            ) : (
              <LightModeOutlined />
            )}
          </CloseButon>
        </SideDiv1Div>
      </SideDiv1>

      <SideDiv2>
        <div
          className={`w-full mt-8 grid
         grid-cols-2 h-1/2 tracking-[0.8px] 
  justify-between items-start text-base ${
    !theme ? "text-nav" : "text-blackContent"
  } `}
        >
          <Sidelink text="Blog" url="blogs" />
          <Sidelink text="  Wishlist" url="save" />
          <Sidelink text="Workshops" url="blogs" />
          <Sidelink text="About" url="about" />

          {token ? (
            <Link
              className="py-8 col-span-2
            px-6  border-b border-t  border-[#424453] hover:text-content"
              to={"/account/logout"}
            >
              {details && details.username}
            </Link>
          ) : (
            <>
              <Link
                className="py-8 col-span-2
            px-6  border-t  border-[#424453] hover:text-content"
                to={"/login"}
              >
                Login
              </Link>
              <Link
                className="py-8 col-span-2
            px-6  border-b border-t  border-[#424453] hover:text-content"
                to={"/register"}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </SideDiv2>
    </SidebarLayout>
  );
}
