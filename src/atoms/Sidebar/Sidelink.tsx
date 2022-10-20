import { Link } from "react-router-dom";
import { RootState, useAppSelector } from "../../redux/store/store";
export interface ILink {
  text: string | undefined;
  url: string;
}
export function Sidelink(props: ILink) {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );
  return (
    <Link
      className={`py-8 col-span-2
      px-8 border-t ${
        !theme
          ? "hover:text-content border-[#424453] "
          : "hover:text-[#000]  border-[#cfcfcf] "
      } `}
      to={`${props.url}`}
    >
      {props.text}
    </Link>
  );
}
