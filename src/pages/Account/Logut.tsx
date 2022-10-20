import { useNavigate } from "react-router-dom";
import {Layout} from "../../layout/Layout";

interface IFuncs {
  handleClear(): void;
}
export default function Logout() {
  const navigate = useNavigate();
  const handleClear: IFuncs["handleClear"] = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Layout>
      <div>
        <button className="" onClick={() => handleClear()}>
          Logout
        </button>
      </div>
    </Layout>
  );
}
