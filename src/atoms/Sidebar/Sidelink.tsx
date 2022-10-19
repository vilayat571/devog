import { Link } from "react-router-dom";
interface ILink {
  text: string;
  url: string;
}
export function Sidelink(props: ILink) {
  return (
    <Link
      className="py-8 col-span-2
px-6 border-t
border-[#424453] hover:text-content"
      to={`/${props.url}`}
    >
      {props.text}
    </Link>
  );
}
