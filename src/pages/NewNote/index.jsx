import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { AiOutlineArrowLeft } from "react-icons/ai";


import { Container, Content, GoHome } from "./styles";





export function NewNote() {

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(null);
  const [description, setDescription] = useState("");


  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState([]);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);

    setNewTag("");
  }

  //função para remover um tag no estado
  function handleRemoveTag(deletedTag) {
    setTags(prevState => prevState.filter(tag => tag !== deletedTag));

  }

  async function handleNewMovieNote() {

    if (!title) {
      alert("Digite o título da nota");
    }
    if (!rating) {
      alert("Digite uma nota");
    }
    if (newTag) {
      return alert("Você deixar uma tag no campo para adicionar, mas não adicionou. Clique para adicionar ou deixe o campo vazio.");
    }



    try {
      await api.post("/movienotes/create", {
        title,
        description,
        rating,
        tags
      });

      alert("Bota criada com sucesso!");
    }
    catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível criar a nota!");
      }
    }
    navigate(-1);

  }

  return (
    <Container>
      <Header />

      <Content>

        <GoHome onClick={handleBack}><AiOutlineArrowLeft />Voltar</GoHome>
        <h1>Novo filme</h1>


        <div className="titleNote">
          <Input
            placeholder="Título"
            type="text"
            onChange={e => setTitle(e.target.value)}
          />
          <Input
            placeholder="Sua nota (de 0 a 5)"
            type="number"
            onChange={e => setRating(e.target.value)}
          />
        </div>

        <TextArea
          placeholder="Observações"
          onChange={e => setDescription(e.target.value)}
        />


        <h2>Mercadores</h2>
        <div className="tags">
          {
            tags.map((tag, index) => (
              <NoteItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))
          }
          <NoteItem
            isnew
            placeholder="Novo marcador"
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            onClick={handleAddTag}
          />
        </div>
        <div className="actionButton">
          <Button
            title="Excluir Filme"
          />
          <Button
            title="Salvar alterações"
            onClick={handleNewMovieNote}
          />
        </div>
      </Content>


    </Container>
  );

}