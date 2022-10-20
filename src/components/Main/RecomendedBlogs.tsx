import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../redux/reducers/getBlogsReducer";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../redux/store/store";

export function RecomendedBlogs() {
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

  return (
    <div className="w-[87.8%] mt-12 h-auto flex flex-col justify-between">
      <div
        className="flex justify-between items-center
      xl:flex-row lg:flex-row md:flex-col sm:flex-col"
      >
        <div
          className={`${
            !theme ? "text-[#fff]" : "text-[#000] "
          } flex flex-col text-3xl mb-2 md:w-full sm:w-full
          lg:w-auto xl:w-auto`}
        >
          <div className={`my-1 ${!theme ? "text-[#fff]" : "text-[#000]"} `}>
            Blog recommendations
          </div>
          <div className={` ${!theme ? "text-[#fff]" : "text-[#000]"} `}>
            Prepared especially for you.
          </div>
        </div>

        <div className="md:w-full sm:w-full xl:mt-0 md:mt-4 sm:mt-4
        lg:mt-0 lg:w-auto xl:w-auto sm:text-left md:text-left
           flex items-center sm:justify-start
           md:justify-start lg:justify-center xl:justify-center">
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

      <div
        className="grid gap-6 xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-2 
      lg:grid-cols-6 w-full h-auto  my-12"
      >
        {blogs.results !== undefined
          ? blogs.results.map((blog: any) => (
              <div className="col-span-2  flex flex-col" key={blog.id}>
                <img
                  className="object-cover  rounded-xl w-[445px] h-[445px]"
                  src={blog.image}
                  alt=""
                />
                <p className="line-clamp-1 mt-8 text-2xl font-bold">
                  {blog.description}
                </p>
                <div
                  className="line-clamp-4 mt-4 text-base text-nav font-bold"
                  dangerouslySetInnerHTML={{ __html: blog.body }}
                />
              </div>
            ))
          : "Loading.."}
      </div>
    </div>
  );
}
