import { RootState, useAppSelector } from "../../redux/store/store";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";


function Fotter() {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );
  return (
    <div
      className="w-full h-auto flex flex-col
      justify-between items-center 
    lg:px-40 md:px-12 sm:px-12 xl:px-40 
    lg:py-20 md:py-0 sm:py-0 xl:py-20 mb-40"
    >
      <div
        className="w-full
      flex  lg:flex-row md:flex-col 
      sm:flex-col xl:flex-row justify-between items-start"
      >
        <div
          className="flex flex-col lg:mb-0
           xl:mb-0 sm:mb-8 md:mb-8
           sm:w-full md:w-full 
        lg:w-auto xl:w-auto justify-between items-start"
        >
          <p className="mb-6 text-2xl font-semibold">S.Vilayat</p>
          <p className="mb-6 text-2xl text-[#a9adc1]">
            Full time educator 
            <br /> 
            making our world better.
          </p>
          <p>
            <GitHubIcon className="mr-3" sx={{ fontSize: 32 }} />
            <LinkedInIcon className="mr-3" sx={{ fontSize: 32 }} />
            <TwitterIcon className="mr-3" sx={{ fontSize: 32 }} />
          </p>
        </div>

        <div
          className="flex flex-col lg:mb-0
           xl:mb-0 sm:mb-8 md:mb-8
           sm:w-full md:w-full 
        lg:w-auto xl:w-auto justify-between items-start"
        >
          <p className="mb-4 text-xl font-semibold">Contact</p>
          <p className="flex flex-col">
            <span className="">Email: vilayat571@gmail.com</span>
            <span className="">Number: +994-50-890-87-27</span>
          </p>
        </div>
        <div
          className="flex flex-col lg:mb-0
           xl:mb-0 sm:mb-8 md:mb-8
           sm:w-full md:w-full 
        lg:w-auto xl:w-auto justify-between items-start"
        >
          <p className="mb-4 text-xl font-semibold">General</p>
          <p className="flex flex-col">
            <Link to="/#" className="">
              My Mission
            </Link>
            <Link to="/#" className="">
              Privacy policy{" "}
            </Link>
            <Link to="/#" className="">
              Terms of use
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Fotter;
