import { Link } from "react-router-dom";
import { Container, Form, Avatar, GoHome } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { FiArrowLeft, FiCamera, FiUser, FiLock, FiMail } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";



export function EditProfile() {
  return (
    <Container>
      <header>
        <GoHome to="/home"><AiOutlineArrowLeft />Voltar</GoHome>
      </header>

      <Form>

        <Avatar>
          <img
            src="https://github.com/Felipe-barbos.png"
            alt="Foto do perfil" />
          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
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
          placeholder="Senha Atual"
          type="Password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova Senha"
          type="Password"
          icon={FiLock}
        />

        <Button title="SALVAR" />
      </Form>
    </Container>
  );
}