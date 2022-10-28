import { SearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mainlayout2,
  Mainlayout2Div1,
  Mainlayout2Image,
  SuglingDiv,
  SuglingDiv1,
  SuglingDivImage,
  SuglingLayout,
  SuglingLayout1,
} from "../../assets/styled/Main/Mainlayout2.styled";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { allBlogs } from "../../data/blogs";
import { recomendedBlogs } from "../../data/recomendedBlogs";
import { Layout } from "../../layout/Layout";
import { RootState, useAppSelector } from "../../redux/store/store";
import { IBlog } from "./[id]";

interface ChangeFunc {
  change(e: React.ChangeEvent<HTMLInputElement>): void;
  submit(e: React.FormEvent<HTMLFormElement>): void;
  blogs: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    large: string;
    body: string;
  }[];
}
function Blog() {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );

  const blogs = recomendedBlogs.concat(allBlogs);

  const navigate = useNavigate();

  const [data, setData] = useState<ChangeFunc["blogs"]>(blogs);
  const [query, setQuery] = useState<string>("");

  const handleChange: ChangeFunc["change"] = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit: ChangeFunc["submit"] = (e) => {
    e.preventDefault();
    navigate("/blogs/#blog");
  };

  const fileteredData = blogs.filter((item) => {
    return (
      item.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
    );
  });
  return (
    <Layout>
      <div className="w-full flex justify-center items-start mt-32">
        <div
          className=" w-11/12 px-8 grid grid-cols-6 xl:grid-cols-6 lg:grid-col-6
        md:grid-cols-3 sm:grid-cols-3 gap-6"
        >
          <div
            className="xl:col-span-3 lg:col-span-3
     md:col-span-6 sm:col-span-6 grid gird-cols-2"
          >
            <p className="text-[38px] tracking-[0.3px] ">
              Read the best blogs.
              <br />
              <span className="text-nav">Find the blog that you want.</span>
            </p>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="relative right-6"
            >
              <SearchOutlined className="relative text-nav left-10" />
              <input
                value={query}
                type="text"
                placeholder="Search post"
                className="w-4/5 border-[1px] bg-theme appearance-none
                font-bold rounded-full py-6 pl-14 pr-8 text-base
                border-[#424454] outline-none text-[#fff]
            "
                onChange={(e) => handleChange(e)}
              />
            </form>
          </div>
          <div
            className="xl:col-span-3 lg:col-span-3 relative left-16
     md:col-span-6 sm:col-span-6 flex justify-start items-center"
          >
            <div className="flex justify-center items-center relative bottom-4">
              <img
                className="object-fit relative left-24 bottom-12 "
                src={
                  "https://d33wubrfki0l68.cloudfront.net/75ef32f6f27d753d760a5cabdc265626cd7c3236/f3487/static/dc68bbe8c04493bdcca9b7146fff9937/b95f4/06-testing-react-apps.png"
                }
                alt=""
              />
              <img
                className="z-3"
                src="https://d33wubrfki0l68.cloudfront.net/8349956f002fc9701bdf95f60e2ea1d8b20a866a/80ad8/static/c55887c6ed1b7b57e1db4e4ae42f3eed/b95f4/05-react-performance.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-4 w-full mt-12">
        <Mainlayout2Image bgColor={!theme ? "#2e3039" : "#f7f7f7"}>
          <Mainlayout2Div1>
            <SuglingLayout>
              <SuglingDivImage>
                <div className="text-2xl  text-nav">
                  The most likely blog
                </div>
                <div className="">
                  {fileteredData[4].title}
                  <br />
                  <span className="text-nav" >
                  {fileteredData[4].description}
                  </span>
                </div>
                <div className=" items-center mt-20  flex justify-center">
                  <div
                    className={`${
                      !theme ? "text-[#fff]" : "text-[#000]"
                    } font-bold text-xl `}
                  >
                    Read full blog
                  </div>
                  <Link
                    to={"/blogs/5"}
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
              </SuglingDivImage>
            </SuglingLayout>

            <SuglingLayout1>
              <SuglingDiv1>
                <img
                  className="object-cover relative top-5 w-[345px] h-[440px] rounded-xl "
                  src={fileteredData[4].thumbnail}
                  alt=""
                />
              </SuglingDiv1>
            </SuglingLayout1>
          </Mainlayout2Div1>
        </Mainlayout2Image>
      </div>
      <div
        className="grid gap-x-6 gap-y-10 xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-2 
      lg:grid-cols-6 w-full h-auto xk:px-32 md:px-12 sm:px-12 lg:px-24 my-12"
      >
        {fileteredData.map((blog: IBlog) => (
          <div className="col-span-2 " key={blog.id}>
            <Link
              id={"#blog"}
              to={`/blogs/${blog.id}`}
              className="flex flex-col "
            >
              <img
                className="object-cover  rounded-xl w-[445px] h-[455px]"
                src={blog.thumbnail}
                alt=""
              />
              <p className="line-clamp-1 mt-12 text-2xl text-content font-bold">
                {blog.description}
              </p>
                <div
                className="line-clamp-2 text-xl mt-3 text-nav"
                dangerouslySetInnerHTML={{ __html: blog.body }}
              /> 
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
export default Blog;
