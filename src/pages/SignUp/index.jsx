import { Container, Form, Background } from "./styles";

import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { useState } from "react";
import { api } from "../../services/api";




export function SingUp() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  function handleSingUp() {

    console.log(name, email, password);

    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }



    //realizando o cadastro do usuário na API

    api.post("/users/create", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      }).catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar!");
        }
      });
  }


  return (
    <Container>

      <Background />
      <Form>
        <h1>MovieNotes</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />


        <Button title="Cadastrar" onClick={handleSingUp}>

        </Button>

        <Link to="/">
          Voltar para o login
        </Link>


      </Form>


    </Container>
  );
}