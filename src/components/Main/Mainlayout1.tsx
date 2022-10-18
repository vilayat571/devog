
import { Link } from "react-router-dom";
import { MainStyledlayout1 } from "../../assets/styled/Main/Mainlayout1.styled";
import { RootState, useAppSelector } from "../../redux/store/store";

export default function Mainlayout1() {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );
  return (
    <MainStyledlayout1>
      <div
        className="xl:col-span-2 lg:col-span-2 md:col-span-6 sm:col-span-6 
    flex flex-col py-12 "
      >
        <p
          className="text-[30px] xl:text-[34px] lg:text-[34px] md:text-[40px] 
      sm:text-[28px] tracking-[0.3px]"
        >
          Helping people make the world a better place through quality software.
        </p>

        <Link
          className={`xl:px-11 lg:px-11 md:px-2 sm:px-2 lg:py-6 xl:py-6 sm:py-6 md:py-6 xl:w-3/5
         sm:w-2/5 md:w-1/3 lg:w-3/5 mt-8 font-bold text-center tracking-wide
        rounded-full ${
          !theme ? "bg-content text-[#000]" : "bg-[#000] text-[#fff]"
        }`}
          to={"/blogs"}
        >
          Read the blog
        </Link>
      </div>

      <div
        className="xl:col-span-4 lg:col-span-4
     md:col-span-6 sm:col-span-6 sm:justify-center md:justify-center
      flex lg:justify-end xl:justify-end items-start"
      >
        <img
          width={550}
          className="rotate-[30deg] object-contain relative xl:bottom-12 sm:bottom-0 
        md:bottom-0 lg:bottom-12"
          src={
            "https://cdn3d.iconscout.com/3d/premium/thumb/space-4551802-3774571.png"
          }
          alt=""
        />
      </div>
    </MainStyledlayout1>
  );
}
