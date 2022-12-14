import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formbuton } from "../../assets/styled/Login/Formbuton.styled";
import { FormInput } from "../../assets/styled/Login/Forminput.styled";
import { Formlayout } from "../../assets/styled/Register/Formlayout.styled";
import { FormRegister } from "../../assets/styled/Register/Formregister.styled";
import {Layout} from "../../layout/Layout";
import { registeredUser } from "../../redux/reducers/registerReducer";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store/store";

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

  const theme: boolean = useAppSelector(
    (state: RootState) => state.changeThemeReducer.theme
  );

  const navigate = useNavigate();
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
    if (
      regForm.email &&
      regForm.first_name &&
      regForm.last_name &&
      regForm.username &&
      regForm.password
    ) {
      dispatch(
        registeredUser({
          first_name: regForm.first_name,
          last_name: regForm.last_name,
          email: regForm.email,
          username: regForm.username,
          password: regForm.password,
        })
      );
      setRegForm({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
      });
      navigate("/login");
    } else {
      alert("Field ca not be blank..");
    }
  };

  const handleChange: Register["handleChange"] = (e) => {
    setRegForm({ ...regForm, [e.target.id]: e.target.value });
  };

  return (
    <Layout>
      <Formlayout>
        <FormRegister onSubmit={(e) => handleSubmit(e)}>
          <FormInput
                      bgColor={!theme ? "#2e3039" : "#fff"}

            required={true}
            placeholder="First name"
            id="first_name"
            onChange={(e) => handleChange(e)}
            value={regForm.first_name}
            type="text"
          />

          <FormInput
                      bgColor={!theme ? "#2e3039" : "#fff"}

            required={true}
            placeholder="Last name"
            id="last_name"
            onChange={(e) => handleChange(e)}
            value={regForm.last_name}
            type="text"
          />

          <FormInput
                      bgColor={!theme ? "#2e3039" : "#fff"}

            required={true}
            placeholder="Email"
            id="email"
            onChange={(e) => handleChange(e)}
            value={regForm.email}
            type="text"
          />

          <FormInput
                      bgColor={!theme ? "#2e3039" : "#fff"}

            required={true}
            placeholder="Username"
            id="username"
            onChange={(e) => handleChange(e)}
            value={regForm.username}
            type="text"
          />

          <FormInput
                      bgColor={!theme ? "#2e3039" : "#fff"}

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
