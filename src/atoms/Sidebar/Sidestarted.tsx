import { Link } from "react-router-dom";
import { RootState, useAppSelector } from "../../redux/store/store";
export interface ILink {
  text: string;
  url: string;
}
export function Sidestarted(props: ILink) {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );
  return (
    <Link
      className={`py-8 col-span-2
      px-6 border-t border-b
     ${!theme ? "border-[#424453]" : " border-[#cfcfcf]"} hover:text-content`}
      to={`${props.url}`}
    >
      <span
        className="bg-[#2e3039] 
     rounded-full text-sm px-6 py-3 text-[#fff]"
      >
        {props.text}
      </span>
    </Link>
  );
}
