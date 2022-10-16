import { DarkModeOutlined, LightModeOutlined, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { changeTheme } from "../../redux/reducers/changeThemeReducer";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../redux/store/store";

interface INav {
  handleChange(): void;
  token: string | null;
  details: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
  };
}

export const Nav = () => {
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
    <div
      className={`w-full h-32 sm:px-6 md:px-6 xl:px-20 lg:px-20 pt-12 py-5
       ${!theme ? "text-content" : "text-black"}
         flex justify-between items-center `}
    >

      <div className=" group w-1/12">
        <Link
          className={`text-[1.5rem] tracking-[1px] w-0 group-hover:w-auto 
          border-b-2 py-1 transition-all transform duration-200 ease-in
        ${
          !theme
            ? "group-hover:border-content border-theme"
            : "group-hover:border-theme border-content"
        }
          font-bold`}
          to={"/"}
        >
          S.Vilayat
        </Link>
      </div>


      <div
        className={`sm:hidden md:hidden lg:flex xl:flex flex w-1/2 tracking-[0.8px] 
        justify-between items-center ${
          !theme ? "text-nav" : "text-blackContent"
        } font-bold`}
      >
        <Link className="px-2 hover:text-content" to={"/blogs"}>
          Blog
        </Link>
        <Link className="px-2 hover:text-content" to={"/save"}>
          Wishlist
        </Link>
        <Link className="px-2 hover:text-content" to={"/save"}>
          Workshops
        </Link>
        <Link className="px-2 hover:text-content" to={"/about"}>
          About
        </Link>
        {token ? (
          <Link className="px-2 hover:text-content" to={"/account/logout"}>
            {details && details.username}
          </Link>
        ) : (
          <>
            <Link className="px-2 hover:text-content" to={"/login"}>
              Login
            </Link>
            <Link className="px-2 hover:text-content" to={"/register"}>
              Register
            </Link>
          </>
        )}
      </div>
      <div className="flex justify-between items-center">
        <div
          className="sm:flex md:flex lg:hidden xl:hidden mx-2 cursor-pointer text-3xl border-2
         border-out hover:border-content p-1 w-14 h-14  transform duration-100 ease-in flex justify-center items-center rounded-full"
        >
          <Menu />
        </div>
        <button
          className={`flex justify-center items-center ml-2 cursor-pointer
          text-3xl border-2 ${
            !theme
              ? " border-out hover:border-content"
              : " border-[#9b9b9b] hover:border-[#000]"
          } p-1 w-14 h-14 rounded-full
          transition-all transform duration-100 ease-in`}
          onClick={() => handleChange()}
        >
          {!theme ? (
            <DarkModeOutlined className="rotate-12 " />
          ) : (
            <LightModeOutlined />
          )}
        </button>
      </div>
    </div>
  );
};
