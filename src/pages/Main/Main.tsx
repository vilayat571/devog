import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";

export default function Main() {
  return (
    <Layout>
      <div className="w-full h-auto flex justify-center items-center flex-col">
        <div className="w-[87.8%] grid grid-cols-6 h-screen mt-12">
          <div
            className="xl:col-span-2 lg:col-span-2 md:col-span-6 sm:col-span-6 
          flex flex-col py-12 "
          >
            <p className="text-[36px] xl:text-[36px] lg:text-[36px] md:text-[40px] sm:text-[36px] tracking-[0.3px]">
              Helping people make the world a better place through quality
              software.
            </p>
            <Link
              className="px-11 py-6 text-[#000] w-3/5 mt-8 font-bold text-center
               rounded-full bg-content "
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
              width={400}
              className={" "}
              src={"https://www.bohemicastudio.com/images/step/rocket.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
