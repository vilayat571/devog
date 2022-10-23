import { Link } from "react-router-dom";
import { MainStyledlayout1 } from "../../assets/styled/Main/Mainlayout1.styled";
import { RightDiv } from "../../assets/styled/Main/RightDiv.styled";
import { RightDivP } from "../../assets/styled/Main/RightDivP.styled";
import { RootState, useAppSelector } from "../../redux/store/store";

interface IMainLayout {
  img: string;
  butonText: string;
  bodyText: string[] | string;
  width?: number;
}

export default function Mainlayout1(props: IMainLayout) {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );
  return (
    <MainStyledlayout1 className=" ">
      <RightDiv>
        <RightDivP>
          {props.bodyText[0]}
          <br />
          {props.bodyText[1]}
          <br />
          {props.bodyText[2]}
        </RightDivP>
        <Link
          className={`xl:px-11 lg:px-11 md:px-2 sm:px-2 lg:py-6 xl:py-6 sm:py-6 md:py-6 xl:w-2/5
         sm:w-2/5 md:w-1/3 lg:w-2/5 mt-8 font-bold text-center tracking-wide
        rounded-full ${
          !theme ? "bg-content text-[#1f2028]" : "bg-[#000] text-[#fff]"
        }`}
          to={"/blogs"}
        >
          {props.butonText}
        </Link>
      </RightDiv>

      <div
        className="xl:col-span-3 lg:col-span-3
     md:col-span-6 sm:col-span-6 sm:justify-center md:justify-center
      flex lg:justify-end xl:justify-end items-start"
      >
        <img
          width={props.width}
          className="rotate-[30deg] object-contain relative xl:bottom-12 sm:bottom-0 
        md:bottom-0 lg:bottom-12"
          src={props.img}
          alt=""
        />
      </div>
    </MainStyledlayout1>
  );
}
