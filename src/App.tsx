import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/Notfound/404";
import About from "./pages/About/About";
import Logout from "./pages/Account/Logut";

import { SingleBlog } from "./pages/Blog/[id]";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Register from "./pages/Register/Register";
import Save from "./pages/Save/Save";
import  Blog  from "./pages/Blog";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/save" element={<Save />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/account/logout" element={<Logout />} />
          <Route path="/blogs/:id" element={<SingleBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}
