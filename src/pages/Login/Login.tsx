import { useState } from "react";
import { Formbuton } from "../../assets/styled/Login/Formbuton.styled";
import { Formimg } from "../../assets/styled/Login/Formimg.styled";
import { FormInput } from "../../assets/styled/Login/Forminput.styled";
import { Formlogin } from "../../assets/styled/Login/Formlogin.styled";
import { LoginLayout } from "../../assets/styled/Login/Loginlayout.styled";
import Layout from "../../layout/Layout";
import { fetchDetails } from "../../redux/reducers/getTokenReducer";
import { useAppDispatch } from "../../redux/store/store";
//@ts-ignore
import loginImg from "../../assets/images/loginimg.webp";
import { useNavigate } from "react-router-dom";

interface ILogin {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): any;
  form: {
    email: string;
    password: string;
  };
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState<ILogin["form"]>({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const handleSubmit: ILogin["handleSubmit"] = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      dispatch(fetchDetails({ email: form.email, password: form.password }));
      navigate("/save");
    } else {
      alert("Any field can not be blank");
    }
    setForm({
      email: "",
      password: "",
    });
  };

  const handleChange: ILogin["handleChange"] = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <Layout>
      <LoginLayout>
        <Formlogin onSubmit={(e) => handleSubmit(e)}>
          <FormInput
            placeholder="Email"
            id="email"
            onChange={(e) => handleChange(e)}
            value={form.email}
            type="text"
          />
          <FormInput
            placeholder="Password"
            id="password"
            onChange={(e) => handleChange(e)}
            value={form.password}
            type="text"
          />
          <Formbuton>Login</Formbuton>
        </Formlogin>
        <Formimg width={600} alt="login detail" src={loginImg} />
      </LoginLayout>
    </Layout>
  );
}
