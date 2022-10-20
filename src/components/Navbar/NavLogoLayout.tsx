import { ReactNode } from "react";

interface INavLay {
  children: ReactNode;
}
export function NavLogoLayout(props: INavLay) {
  return <div className=" group w-1/12">{props.children}</div>;
}
