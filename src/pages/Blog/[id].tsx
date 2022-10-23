import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecomendedBlogs } from "../../components/Main/RecomendedBlogs";
import { allBlogs } from "../../data/blogs";
import { recomendedBlogs } from "../../data/recomendedBlogs";
import { Layout } from "../../layout/Layout";

export interface IBlog {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  large: string;
  body: string;
}

export function SingleBlog() {
  const { id } = useParams();

  const [blog, setBlog] = useState<any>(null);

  const blogs = recomendedBlogs.concat(allBlogs);

  const blogId: number = Number(id);

  useEffect(() => {
    const data = blogs.filter((blog: IBlog) => {
      return blog.id === blogId;
    });

    setBlog(data);
  }, []);

  return (
    <Layout>
      <div className="flex flex-col justify-between items-center">
        <div className="grid col-span-2 w-full h-auto px-20 my-12">
          {blog !== null ? (
            <div className="col-span-2 flex flex-col " key={blog[0].id}>
              <div className="flex justify-center ">
                <img
                  className="object-cover rounded-md outline-none border-none w-[900px] h-[600px]"
                  src={blog[0].thumbnail}
                  alt=""
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <p className=" w-[900px] line-clamp-1 mt-8 text-2xl font-bold">
                  {blog[0].description}
                </p>
                <div
                  className=" w-[900px] line-clamp-4 mt-4 text-base text-nav font-bold"
                  dangerouslySetInnerHTML={{ __html: blog[0].body }}
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <div
                  className=" w-[900px] line-clamp-4 mt-4 text-base text-nav font-bold"
                  dangerouslySetInnerHTML={{ __html: blog[0].body }}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div
                  className=" w-[900px] line-clamp-4 mt-4 text-base text-nav font-bold"
                  dangerouslySetInnerHTML={{ __html: blog[0].body }}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div
                  className=" w-[900px] line-clamp-4 mt-4 text-base text-nav font-bold"
                  dangerouslySetInnerHTML={{ __html: blog[0].body }}
                />
              </div>
            </div>
          ) : (
            "Loading.."
          )}
        </div>
        <RecomendedBlogs />
      </div>
    </Layout>
  );
}
