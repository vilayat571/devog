import { useNavigate, useLocation, Navigate } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName =
    location && location.pathname.slice(1, location.pathname.length);

  return (
    <div
      className="bg-[#1f2028] h-screen w-full 
      flex flex-col justify-center items-center text-[#fff]"
    >
      <div className="">
        <h1 className="text-[5rem] font-bold">404</h1>
      </div>
      <div className=" text-lg text-center">
        <p className="text-lg">Sorry, you found a page that's missing stuff.</p>
        <p className="text-[#a9adc1] text-lg">
          <span className="mr-1">"{pathName}" -</span>
          is not a page on readypass.com
        </p>
      </div>
      <div className="mt-6">
        <button
          className="text-sm bg-[#2e3039] text-[#fff] px-8 py-3 tracking-[0.6px] rounded-full"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    </div>
  );
}
