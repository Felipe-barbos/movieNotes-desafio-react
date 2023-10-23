import { Container, Form, Background, GoHome, GoSignUp } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";



import { FiLogIn, FiMail, FiLock } from "react-icons/fi"


export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Movie Notes</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />


        <GoHome to="/home">
          Entrar
        </GoHome>

        <GoSignUp to="/signUp">
          Criar Conta
        </GoSignUp>


      </Form>

      <Background />
    </Container>
  );
}