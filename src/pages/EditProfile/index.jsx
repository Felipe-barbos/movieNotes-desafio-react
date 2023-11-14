import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Avatar, GoHome } from "./styles";

import avatarPlaceHolder from "../../assets/avatar.svg";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { useAuth } from "../../hooks/auth";

import { FiArrowLeft, FiCamera, FiUser, FiLock, FiMail } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { api } from "../../services/api";




export function EditProfile() {

  const { user, updateProfile } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);





  const navigate = useNavigate();


  function handleBack() {
    navigate(-1);
  }

  async function handleUpdateProfile() {

    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    await updateProfile({ user, avatarFile })

    handleBack();
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);

    setAvatar(imagePreview);
  }


  return (
    <Container>
      <header>
        <GoHome onClick={handleBack}><AiOutlineArrowLeft />Voltar</GoHome>
      </header>

      <Form>

        <Avatar>
          <img
            src={avatar}
            alt="Foto do perfil" />
          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
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
          placeholder="Senha Atual"
          type="Password"
          icon={FiLock}
          onChange={e => setOldPassword(e.target.value)}
        />

        <Input
          placeholder="Nova Senha"
          type="Password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title="SALVAR" onClick={handleUpdateProfile} />
      </Form>
    </Container>
  );
}