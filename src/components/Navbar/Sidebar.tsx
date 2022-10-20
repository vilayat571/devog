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
import {
  SideDiv2,
  SideDiv2Layout,
} from "../../assets/styled/Sidebar/SideDiv2.styled";
import { Sidelink } from "../../atoms/Sidebar/Sidelink";
import { Sidelinkadvanced } from "../../atoms/Sidebar/Sidelinkadvanced";
import { SideDiv1link } from "../../atoms/Sidebar/SideDiv1link";
import { Sidestarted } from "../../atoms/Sidebar/Sidestarted";

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
    <SidebarLayout bgColor={!theme ? '#1f2028' : '#fff'}>
      <SideDiv1>
        <SideDiv1link text="ReadyPass" url="/" />
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
        <SideDiv2Layout color={!theme ? "#a9adc1" : "#535661"}>
          <Sidelink text="Blogs" url="#" />
          <Sidelink text="Write" url="#" />
          <Sidelink text="Wishlist" url="#" />
          <Sidelink text="Interview" url="#" />
          <Sidelink text="Write questions" url="#" />

          {token ? (
            <Sidelinkadvanced
              text={details && details.username}
              url={"account/logout"}
            />
          ) : (
            <>
              <Sidestarted text={"Get started"} url={"/login"} />
            </>
          )}
        </SideDiv2Layout>
      </SideDiv2>
    </SidebarLayout>
  );
}
