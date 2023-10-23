

import { FiSearch } from "react-icons/fi";
import { Container, Profile, SearchInput } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <h1>Movie Notes</h1>

      <SearchInput >

        <FiSearch />
        <input placeholder="Pesquisar pelo título" />
      </SearchInput>

      <Profile to="/editProfile">

        <div>
          <strong>Felipe Barbosa</strong>
          <Link to="/">Sair</Link>
        </div>
        <img src="https://github.com/felipe-barbos.png" alt="Foto de perfil" />

      </Profile>



    </Container>

  );
}