import { Container, Content, OptionAddFilm, AddMovie, SearchInput, Profile } from "./styles";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar.svg";


import { useState, useEffect } from "react";

import { MdAdd } from "react-icons/md"
import { FiSearch } from "react-icons/fi";

import { Note } from "../../components/Note";






export function Home() {

  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [movieNotes, setMovieNotes] = useState([]);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();






  useEffect(() => {

    async function handleGetMovieNotes() {
      const response = await api.get(`/movienotes/?title=${search}`);

      setMovieNotes(response.data.movieNotesWithTags);
    }

    handleGetMovieNotes();

  }, [search]);


  function handleNoteView(id) {
    navigate(`/noteView/${id}`);
  }

  function renderNoteMovies(movieNotes) {
    if (movieNotes.length == 0) {

      return (
        <h1> Não há notas para serem demonstradas.</h1>
      )
    } else {
      return (
        movieNotes.map(movieNote => (
          <Note
            key={movieNote.id}
            data={
              {
                title: movieNote.title,
                rating: movieNote.rating,
                description: movieNote.description,
                tags: movieNote.tags
              }


            }
            onClick={() => handleNoteView(movieNote.id)}

          />
        ))
      )
    }
  }

  return (
    <Container>
      <header>
        <h1>MovieNotes</h1>

        <SearchInput >

          <FiSearch />
          <input placeholder="Pesquisar pelo título"
            onChange={e => setSearch(e.target.value)} />
        </SearchInput>

        <Profile to="/editProfile">

          <div>
            <strong>{user.name}</strong>
            <Link to="/" onClick={signOut}>Sair</Link>
          </div>
          <img src={avatarUrl} alt="Foto de perfil" />

        </Profile>

      </header>

      <OptionAddFilm>
        <h1>Meus filmes</h1>
        <AddMovie to="/newNote"> <MdAdd /> Adicionar Filme</AddMovie>
      </OptionAddFilm>

      <Content>
        {renderNoteMovies(movieNotes)}
      </Content>
    </Container >
  );


}