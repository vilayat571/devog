import { Link } from "react-router-dom";
import { ILink } from "../Sidebar/Sidelink";

export function Navlink(props:ILink) {
  return (
    <Link className="px-2 hover:text-content" to={props.url}>
    {props.text}
  </Link>
  )
}
