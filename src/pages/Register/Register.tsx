import { useState } from "react";
import { Formbuton } from "../../assets/styled/Login/Formbuton.styled";
import { FormInput } from "../../assets/styled/Login/Forminput.styled";
import { Formlogin } from "../../assets/styled/Login/Formlogin.styled";
import { Formlayout } from "../../assets/styled/Register/Formlayout.styled";
import { FormRegister } from "../../assets/styled/Register/Formregister.styled";
import Layout from "../../layout/Layout";
import { registeredUser } from "../../redux/reducers/registerReducer";
import { useAppDispatch } from "../../redux/store/store";

interface Register {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  regForm: {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
  };
}

export default function Register() {
  const [regForm, setRegForm] = useState<Register["regForm"]>({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const handleSubmit: Register["handleSubmit"] = (e) => {
    e.preventDefault();
    setRegForm({
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
    });
    dispatch(
      registeredUser({
        first_name: regForm.first_name,
        last_name: regForm.last_name,
        email: regForm.email,
        username: regForm.username,
        password: regForm.password,
      })
    );
  };

  const handleChange: Register["handleChange"] = (e) => {
    setRegForm({ ...regForm, [e.target.id]: e.target.value });
  };

  return (
    <Layout>
      <Formlayout>
        <FormRegister onSubmit={(e) => handleSubmit(e)}>
          <FormInput
            required={true}
            placeholder="First name"
            id="first_name"
            onChange={(e) => handleChange(e)}
            value={regForm.first_name}
            type="text"
          />

          <FormInput
            required={true}
            placeholder="Last name"
            id="last_name"
            onChange={(e) => handleChange(e)}
            value={regForm.last_name}
            type="text"
          />

          <FormInput
            required={true}
            placeholder="Email"
            id="email"
            onChange={(e) => handleChange(e)}
            value={regForm.email}
            type="text"
          />

          <FormInput
            required={true}
            placeholder="Username"
            id="username"
            onChange={(e) => handleChange(e)}
            value={regForm.username}
            type="text"
          />

          <FormInput
            required={true}
            placeholder="Password"
            id="password"
            onChange={(e) => handleChange(e)}
            value={regForm.password}
            type="text"
          />
          <Formbuton>Register</Formbuton>
        </FormRegister>
      </Formlayout>
    </Layout>
  );
}
