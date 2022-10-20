import { Link } from "react-router-dom";
import { RootState, useAppSelector } from "../../redux/store/store";
import { ILink } from "../Sidebar/Sidelink";

export function Logo(props: ILink) {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );
  return (
    <Link
      className={`text-[1.5rem] tracking-[1px] w-0 group-hover:w-auto 
border-b-2 py-1 transition-all transform duration-200 ease-in font-bold
${
  !theme
    ? "group-hover:border-content border-theme text-[#fff]"
    : "group-hover:border-theme border-content text-[#535661]"
}
`}
      to={props.url}
    >
      {props.text}
    </Link>
  );
}
