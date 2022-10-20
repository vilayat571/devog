import React, { useState } from "react";
import { Formbuton } from "../../assets/styled/Login/Formbuton.styled";
import { FormInput } from "../../assets/styled/Login/Forminput.styled";
import { Formlogin } from "../../assets/styled/Login/Formlogin.styled";
import { LoginLayout } from "../../assets/styled/Login/Loginlayout.styled";
import {Layout} from "../../layout/Layout";
import { fetchDetails } from "../../redux/reducers/getTokenReducer";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../redux/store/store";
import { Link, useNavigate } from "react-router-dom";

interface ILogin {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): any;
  form: {
    email: string;
    password: string;
  };
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  repeatPassword(e: React.ChangeEvent<HTMLInputElement>): void;
  password: string;
}

export default function Login() {
  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );

  const navigate = useNavigate();

  const [form, setForm] = useState<ILogin["form"]>({
    email: "",
    password: "",
  });

  const [password, setPassword] = useState<ILogin["password"]>("");

  const dispatch = useAppDispatch();

  const handleSubmit: ILogin["handleSubmit"] = (e) => {
    e.preventDefault();
    if (form.email && form.password && password) {
      if (form.password === password) {
        dispatch(fetchDetails({ email: form.email, password: form.password }));
        navigate("/save");
        setForm({
          email: "",
          password: "",
        });
        setPassword("");
      } else {
        alert("Passwords are not equal..");
      }
    } else {
      alert("Any field can not be blank");
    }
  };

  const handleChange: ILogin["handleChange"] = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleRepeat: ILogin["repeatPassword"] = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Layout>
      <LoginLayout>
        <Formlogin onSubmit={(e) => handleSubmit(e)}>
          <FormInput
            bgColor={!theme ? "#2e3039" : "#fff"}
            placeholder="Email"
            id="email"
            onChange={(e) => handleChange(e)}
            value={form.email}
            type="text"
          />
          <FormInput
            bgColor={!theme ? "#2e3039" : "#fff"}
            placeholder="Password"
            id="password"
            onChange={(e) => handleChange(e)}
            value={form.password}
            type="text"
          />
          <FormInput
            bgColor={!theme ? "#2e3039" : "#fff"}
            placeholder="Repeat password"
            id="repeating password"
            onChange={(e) => handleRepeat(e)}
            value={password}
            type="text"
          />
          <p className="text-nav text-sm mb-4">
            Did you have account?.
            <Link to="/register" className="text-[#fff] ml-2">
              Sign up
            </Link>
          </p>
          <Formbuton>Login</Formbuton>
        </Formlogin>
      </LoginLayout>
    </Layout>
  );
}
