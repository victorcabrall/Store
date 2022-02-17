import React, { useEffect, useState } from "react";
import { List } from "../Layout/Footer/style";
import { Main, Section, Label, Input, Button, Form, GenderBox, Warning  } from "./style";
import PersonIcon from "@mui/icons-material/Person";
import WarningIcon from '@mui/icons-material/Warning';

const Register = () => {
  const [cpf, setCPF] = useState("");
  return (
    <Main>
      <Section>
        <h1>CRIAR CONTA</h1>
        <Warning><WarningIcon></WarningIcon>Email nao foi preenchido</Warning>
        <Form>
          
          <Label>
            Nome completo
            <Input type="text"></Input>
          </Label>
          <Label>
            CPF
            <Input type="text"></Input>
          </Label>
          <GenderBox>
            Genero:
            <span>
              <Label>
                Feminino
                <Input type="radio" name="gender"></Input>
              </Label>
              <Label>
                Masculino
                <Input type="radio" name="gender"></Input>
              </Label>
            </span>
          </GenderBox>
          <Label>
            Data de nascimento
            <Input type="date" name="date" ></Input>
          </Label>
          <Label>
            Telefone
            <Input type="tel" name="phone"></Input>
          </Label>
          <Label>
            E-mail
            <Input type="email"></Input>
          </Label>
          <Label>
            Senha:
            <Input type="password"></Input>
          </Label>
          <Label>
            Confimar senha
            <Input type="password"></Input>
          </Label>
          <Label>
          <Input type="checkbox" ></Input>
          <p>Eu aceito os termos de uso</p>
           
          </Label>
          <Button type="button" value="Criar Conta"></Button>
        </Form>
      </Section>
    </Main>
  );
};
export default Register;
