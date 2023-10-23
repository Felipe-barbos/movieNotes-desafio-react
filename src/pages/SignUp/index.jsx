import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

import { Input } from "../../components/input";
import { Button } from "../../components/button";




import { FiMail, FiLock, FiUser } from "react-icons/fi"


export function SingUp() {
  return (
    <Container>

      <Background />
      <Form>
        <h1>Movie Notes</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

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


        <Button title="Cadastrar">

        </Button>

        <Link to="/">
          Voltar para o login
        </Link>


      </Form>


    </Container>
  );
}