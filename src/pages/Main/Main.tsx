import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link } from "react-router-dom";
import { MaindivStyled } from "../../assets/styled/Main/MaindivStyled.styled";
import Mainlayout1 from "../../components/Main/Mainlayout1";
import { RecomendedBlogs } from "../../components/Main/RecomendedBlogs";
import Layout from "../../layout/Layout";
import { RootState, useAppSelector } from "../../redux/store/store";

function Main() {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );
  return (
    <Layout>
      <MaindivStyled>
        <Mainlayout1 />

        {/* Black section */}

        <div
          className={`h-auto w-[87.5%] grid grid-cols-4 ${
            !theme ? "bg-[#2e3039] " : "bg-[#f7f7f7]"
          } 
          sm:py-8 md:py-8 lg:py-24 xl:py-24
          sm:px-6 md:px-6 lg:px-16 xl:px-16
          rounded-lg outline-none border-none`}
        >
          <div className="col-span-4 h-auto grid grid-cols-2 lg:gap-x-20 xl:gap-x-20 md:gap-4 sm:gap-4 sm:pb-12 md:pb-12 lg:pt-10 lg:pb-20 xl:pb-20 xl:pt-10 ">
            <div className="flex lg:col-span-1 md:col-span-2 sm:col-span-2 xl:col-span-1 justify-center items-start">
              <div className="text-[30px] xl:text-[34px] lg:text-[34px] md:text-[40px] sm:text-[28px] tracking-[0.3px] ">
                Struggling to keep up with frontend tools?
              </div>
            </div>
            <div className="flex lg:col-span-1 md:col-span-2 sm:col-span-2 xl:col-span-1 justify-center items-start">
              <div className="text-[30px] xl:text-[34px] lg:text-[34px] md:text-[40px] sm:text-[28px] tracking-[0.3px] text-[#a9adc1]">
                Well, you're in the right place. My website is your one stop
                shop for everything you need to build JavaScript apps.
              </div>
            </div>
          </div>

          <hr className="col-span-full border-[#8b8ea5]" />

          <div
            className="col-span-4 flex flex-row md:flex-col sm:flex-col lg:flex-row xl:flex-row
             justify-between items-center xl:mt-10 sm:mt-0 md:mt-0 lg:mt-10 lg:pt-10
             sm:pt-4 md:pt-4 xl:pt-10"
          >
            <div
              className="xl:mt-0 sm:mt-4 md:mt-4 lg:mt-0 flex xl:w-1/5 md:w-full
             sm:w-full lg:w-1/5"
            >
              <div
                className="text-[36px] xl:text-[34px] lg:text-[34px] md:text-[40px]
               sm:text-[28px] tracking-[0.3px] "
              >
                blog <br /> courses <br /> podcasts
              </div>
            </div>
            <div className="flex xl:w-2/5 md:w-full sm:w-full lg:w-2/5 lg:mt-0 xl:mt-0 md:mt-4 sm:mt-4">
              <div className="flex justify-between items-start flex-col text-[30px] xl:text-[34px] lg:text-[34px] md:text-[40px] sm:text-[28px] tracking-[0.3px] text-nav">
                <div
                  className={`${
                    !theme ? "text-[#fff]" : "text-[#000]"
                  } text-3xl mb-2`}
                >
                  Educational blog
                </div>
                <div className="mt-2 mb-2 text-base">
                  My 192 blog posts (and counting) have been read 420,289 times
                  by 278,226 people. There you'll find blogs about JavaScript,
                  TypeScript, React, Testing, your career, and and more.
                </div>
                <div className=" items-center mt-20  flex justify-center">
                  <div
                    className={`${
                      !theme ? "text-[#fff]" : "text-[#000]"
                    } font-medium text-xl `}
                  >
                    Start reading the blog
                  </div>
                  <Link
                    to={"/blogs"}
                    className={`flex justify-center items-center ml-6 cursor-pointer
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
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <RecomendedBlogs />
        </div>
      </MaindivStyled>
    </Layout>
  );
}
export default Main;
