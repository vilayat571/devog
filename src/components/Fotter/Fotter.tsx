import { RootState, useAppSelector } from "../../redux/store/store";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
export function Fotter() {
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
          <p className="mb-6 text-2xl font-semibold">ReadyPass</p>
          <p className="mb-6 text-2xl text-[#a9adc1]">
            Full time interviewer
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
          <p className="mb-4 text-lg font-medium">Contact</p>
          <p className="flex flex-col">
            <span className="text-nav mt-1">readypass@gmail.com</span>
            <span className="text-nav mt-1">readypass.com</span>
          </p>
        </div>
        <div
          className="flex flex-col lg:mb-0
           xl:mb-0 sm:mb-8 md:mb-8
           sm:w-full md:w-full 
        lg:w-auto xl:w-auto justify-between items-start"
        >
          <p className="mb-4 text-lg font-medium">General</p>
          <p className="flex flex-col">
            <Link to="/#" className="text-nav mt-1">
              Our Mission
            </Link>
            <Link to="/#" className="text-nav mt-1">
              Privacy policy
            </Link>
            <Link to="/#" className="text-nav mt-1">
              Terms of use
            </Link>
          </p>
        </div>
      </div>
      <div
        className="w-full
      flex  lg:flex-row md:flex-col 
      sm:flex-col xl:flex-row justify-between items-start h-auto py-12 mt-8"
      >
        <div
          className="flex flex-col 
           sm:w-full md:w-full 
        lg:w-2/3 xl:w-2/3 justify-between items-start"
        >
          <p className="flex flex-col">
            <p className="mb-4 text-lg font-medium"> Stay up to date!</p>
            <p className="text-base text-nav">
              Subscribe to the newsletter to stay up to date with
              <br />
              articles,courses and much more! Learn more..
            </p>
          </p>
          <form className="flex flex-col w-full">
            <input
              type="text"
              placeholder="First name"
              className="bg-[#2e3039] px-11 py-8 rounded-lg
              outline-none border-none mt-12
            "
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-[#2e3039] px-11 py-8 rounded-lg
              outline-none border-none mt-5 "
            />
            <div className="xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-3/4 mt-12 
            flex lg:mb-0 xl:mb-0 sm:mb-8 md:mb-8
             sm:justify-start md:justify-start  justify-center items-center">
              <div
                className={`${
                  !theme ? "text-[#fff]" : "text-[#000]"
                } text-lg font-bold mr-8`}
              >
                Contact me
              </div>
              <Link
                to={"/blogs"}
                className={`flex justify-center items-center cursor-pointer
          text-3xl border-2 ${
            !theme
              ? " border-out hover:border-content"
              : " border-[#9b9b9b] hover:border-[#000]"
          } p-1 w-14 h-14 rounded-full
          transition-all transform duration-100 ease-in`}
              >
                <ArrowForwardIosOutlinedIcon className=" " />
              </Link>
            </div>
          </form>
        </div>
        <div
          className="flex flex-col lg:mb-0
           xl:mb-0 sm:mb-8 md:mb-8
           sm:w-full md:w-full 
        lg:w-auto xl:w-auto justify-between items-start"
        >
          <p className="mb-4 text-lg font-medium">Sitemap</p>
          <p className="flex flex-col">
            <Link to="/#" className="text-nav mt-1">
              Main
            </Link>
            <Link to="/#" className="text-nav mt-1">
              Blogs
            </Link>
            <Link to="/#" className="text-nav mt-1">
              Write
            </Link>
            <Link to="/#" className="text-nav mt-1">
              Wishlists
            </Link>
            <Link to="/#" className="text-nav mt-1">
              Interview
            </Link>
            <Link to="/#" className="text-nav mt-1">
              Sign in
            </Link>
            <Link to="/#" className="text-nav mt-1">
              Sign up
            </Link>
            <Link to="/#" className="text-nav mt-1">
              FAQ
            </Link>
            <Link to="/#" className="text-nav mt-1">
              Privacy policy
            </Link>
            <Link to="/#" className="text-nav mt-1">
              Terms of use
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
