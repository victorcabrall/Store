import React, { useState } from "react";
import { Main, Section, Form, InputBox, Input, ButtonLogin, ButtonRegister, Warning } from "./style";
import WarningIcon from '@mui/icons-material/Warning';
import Navbar from "../Layout/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFalied, setLoginFalied] = useState(false);
  const sendForm = () => {
    
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    }).then(res=>res.json()).then(res=>console.log(res));
  };
  return (
    <Main>
      <Section>

        <h1>ENTRAR NA CONTA</h1>
        <Warning><WarningIcon></WarningIcon>Email ou senha incorretas</Warning>
        <Form>
          <InputBox>
            <label for="user">Usuario</label>
            <Input type="text" id="user"></Input>
          </InputBox>
          <InputBox>
            <label for="password">Senha</label>
            <Input type="password" id="password"></Input>
            <p>Esqueci minha senha</p>
          </InputBox>
          <ButtonLogin type="button" value="Entrar"></ButtonLogin>
          <ButtonRegister type="button" value="Criar conta"></ButtonRegister>
        </Form>
      </Section>
    </Main>
  );
};

export default Login;
