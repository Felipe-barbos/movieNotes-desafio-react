

import { FiSearch } from "react-icons/fi";
import { Container, Profile, SearchInput } from "./styles";

import avatarPlaceholder from "../../assets/avatar.svg";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Header() {

  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  return (
    <Container>
      <h1>MovieNotes</h1>

      <SearchInput >

        <FiSearch />
        <input placeholder="Pesquisar pelo título" />
      </SearchInput>

      <Profile to="/editProfile">

        <div>
          <strong>{user.name}</strong>
          <Link to="/" onClick={signOut}>Sair</Link>
        </div>
        <img src={avatarUrl} alt="Foto de perfil" />

      </Profile>



    </Container>

  );
}