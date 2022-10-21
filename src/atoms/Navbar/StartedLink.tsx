import { Link } from "react-router-dom";
import { ILink } from "../Sidebar/Sidelink";

export function StartedLink(props: ILink) {
  return (
    <Link
      className="px-6 text-[15px] py-3 font-thin rounded-full bg-[#2e3039] text-content"
      to={props.url}
    >
      {props.text}
    </Link>
  );
}
