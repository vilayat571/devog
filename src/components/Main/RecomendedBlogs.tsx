import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../redux/reducers/getBlogsReducer";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../redux/store/store";

function RecomendedBlogs() {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );

  const dispatch = useAppDispatch();

  const blogs = useAppSelector(
    (state: RootState) => state.getBlogsReducer.blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  /*
author: 1
body: "asdsadsad"
category: 1
created_date: "2022-09-18"
description: "asdsad"
id: 1
image: null
title: "Python variables"

*/

  return (
    <div className="w-[87.8%] mt-12 h-[50vh] flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div
          className={`${
            !theme ? "text-[#fff]" : "text-[#000]"
          } flex flex-col text-3xl mb-2`}
        >
          <div className={`mb-1 ${!theme ? "text-[#fff]" : "text-[#000]"} `}>
            Blog recommendations
          </div>
          <div className={`mt-1 ${!theme ? "text-[#fff]" : "text-[#000]"} `}>
            Prepared especially for you.
          </div>
        </div>

        <div className="flex items-center justify-center">
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
      {blogs.results !== undefined
        ? blogs.results.slice(0, 3).map((blog: any) => (
            <div key={blog.id}>
              {blog.description}
              <br />
              {blog.title}
            </div>
          ))
        : "Loading.."}
    </div>
  );
}
export default RecomendedBlogs;
