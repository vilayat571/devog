import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import { RootState, useAppSelector } from "../../redux/store/store";

export default function Main() {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );
  return (
    <Layout>
      <div className="w-full h-auto flex justify-center items-center flex-col pb-20">
        <div className="w-[87.8%] grid grid-cols-6 lg:mt-20 xl:mt-20 md:mt-4 sm:mt-4">
          <div
            className="xl:col-span-2 lg:col-span-2 md:col-span-6 sm:col-span-6 
          flex flex-col py-12 "
          >
            <p className="text-[30px] xl:text-[34px] lg:text-[34px] md:text-[40px] sm:text-[28px] tracking-[0.3px]">
              Helping people make the world a better place through quality
              software.
            </p>
            <Link
              className={`xl:px-11 lg:px-11 md:px-2 sm:px-2 lg:py-6 xl:py-6 sm:py-6 md:py-6 xl:w-3/5 sm:w-2/5 md:w-1/3 lg:w-3/5 mt-8 font-bold text-center tracking-wide
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
              className="rotate-[30deg] object-contain relative xl:bottom-12 sm:bottom-0 md:bottom-0 lg:bottom-12"
              src={
                "https://cdn3d.iconscout.com/3d/premium/thumb/space-4551802-3774571.png"
              }
              alt=""
            />
          </div>
        </div>
        <div className="h-auto w-[87.5%] grid grid-cols-4 bg-[#2e3039] 
        sm:py-8 md:py-8 lg:py-24 xl:py-24
        sm:px-6 md:px-6 lg:px-16 xl:px-16
        rounded-lg outline-none border-none ">
          
          {/* div container 1 */}

          <div className="col-span-4 h-auto  grid grid-cols-2 lg:gap-x-20 xl:gap-x-20 md:gap-4 sm:gap-4  sm:pb-12 md:pb-12 lg:pt-10 lg:pb-20 xl:pb-20 xl:pt-10 ">
            <div className="flex lg:col-span-1 md:col-span-2 sm:col-span-2 xl:col-span-1 justify-center items-start">
              <p className="text-[30px] xl:text-[34px] lg:text-[34px] md:text-[40px] sm:text-[28px] tracking-[0.3px] ">
                Struggling to keep up with frontend tools?
              </p>
            </div>
            <div className="flex lg:col-span-1 md:col-span-2 sm:col-span-2 xl:col-span-1 justify-center items-start">
              <p className="text-[30px] xl:text-[34px] lg:text-[34px] md:text-[40px] sm:text-[28px] tracking-[0.3px] text-nav">
                Well, you're in the right place. My website is your one stop
                shop for everything you need to build JavaScript apps.
              </p>
            </div>
          </div>
          
          
          <hr className="col-span-full border-[#8b8ea5]" />

          <div className="col-span-4 h-screen flex justify-center items-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
            tempore rem esse iusto saepe assumenda sunt ad. Nihil quos quidem
            sapiente aliquam hic eligendi delectus vel voluptatem. Ex,
            accusantium alias.
          </div>
        </div>
      </div>
    </Layout>
  );
}
