import { Link } from "react-router-dom";
import { RootState, useAppSelector } from "../../redux/store/store";
import { ILink } from "./Sidelink";

export function SideDiv1link(props: ILink) {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );
  return (
    <Link
      className={`text-[1.5rem] tracking-[1px] w-0 group-hover:w-auto  
    border-b-2 py-1  font-bold
${
  !theme
    ? "group-hover:border-content border-theme"
    : "group-hover:border-theme border-content"
}`}
      to={props.url}
    >
      {props.text}
    </Link>
  );
}
