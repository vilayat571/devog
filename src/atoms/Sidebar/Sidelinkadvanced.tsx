import { Link } from "react-router-dom";

interface ISidelinkadvanced {
  text: string | undefined;
  url: string;
}

export function Sidelinkadvanced(props: ISidelinkadvanced) {
  return (
    <Link
      className="py-8 col-span-2
px-6 border-t border-b
border-[#424453] hover:text-content"
      to={`/${props.url}`}
    >
      {props.text}
    </Link>
  );
}
