import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link } from "react-router-dom";
import {
  BlogDiv,
  MaindivStyled,
  RecomendedLayout,
} from "../../assets/styled/Main/MaindivStyled.styled";
import {
  Mainlayout2,
  Mainlayout2Div1,
  SuglingDiv,
  SuglingDiv1,
  SuglingLayout,
  SuglingLayout1,
} from "../../assets/styled/Main/Mainlayout2.styled";
import { Diver } from "../../atoms/Main/Diver";
import Mainlayout1 from "../../components/Main/Mainlayout1";
import { RecomendedBlogs } from "../../components/Main/RecomendedBlogs";
import { Layout } from "../../layout/Layout";
import { RootState, useAppSelector } from "../../redux/store/store";

function Main() {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );

  const bodyText: Array<string> = [
    "Helping people to make",
    "the world a better place",
    "     through quality software",
  ];
  return (
    <Layout>
      <MaindivStyled>
        <Mainlayout1
          img="https://cdn3d.iconscout.com/3d/premium/thumb/space-4551802-3774571.png"
          butonText="Read blog"
          bodyText={bodyText}
        />
        <Mainlayout2 bgColor={!theme ? "#2e3039" : "#f7f7f7"}>
          <Mainlayout2Div1>
            <SuglingLayout>
              <SuglingDiv>
                Struggling to keep up with frontend tools?
              </SuglingDiv>
            </SuglingLayout>

            <SuglingLayout1>
              <SuglingDiv1>
                Well, you're in the right place. My website is your one stop
                shop for everything you need to build JavaScript apps.
              </SuglingDiv1>
            </SuglingLayout1>
          </Mainlayout2Div1>
          <Diver />

          <div
            className="col-span-4 flex flex-row md:flex-col sm:flex-col lg:flex-row xl:flex-row
          justify-between items-center xl:mt-10 sm:mt-0 md:mt-0 lg:mt-10 lg:pt-10
          sm:pt-4 md:pt-4 xl:pt-10"
          >
            <div
              className="xl:mt-0 sm:mt-4 md:mt-4 lg:mt-0 flex xl:w-1/5 md:w-full
          sm:w-full lg:w-1/5"
            >
              <BlogDiv>
                blog <br /> courses <br /> podcasts
              </BlogDiv>
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
        </Mainlayout2>

        <RecomendedLayout>
          <RecomendedBlogs />
        </RecomendedLayout>
      </MaindivStyled>
    </Layout>
  );
}
export default Main;
