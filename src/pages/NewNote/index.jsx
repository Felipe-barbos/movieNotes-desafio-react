import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { AiOutlineArrowLeft } from "react-icons/ai"


import { Container, Content, GoHome } from "./styles";


export function NewNote() {

  return (
    <Container>
      <Header />

      <Content>

        <GoHome to="/home"><AiOutlineArrowLeft />Voltar</GoHome>
        <h1>Novo filme</h1>


        <div className="titleNote">
          <Input
            placeholder="Título"
            type="text"
          />
          <Input
            placeholder="Sua nota (de 0 a 5)"
            type="number"
          />
        </div>

        <TextArea
          placeholder="Observações"
        />


        <h2>Mercadores</h2>
        <div className="tags">
          <NoteItem value="Spider-Man" />
          <NoteItem isnew placeholder="Novo marcador" />
        </div>
        <div className="actionButton">
          <Button
            title="Excluir Filme"
          />
          <Button
            title="Salvar"
          />
        </div>
      </Content>


    </Container>
  );

}