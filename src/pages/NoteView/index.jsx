import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Container, GoHome, Content } from "./styles";

import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from "../../assets/avatar.svg";

import { AiOutlineArrowLeft, AiOutlineClockCircle } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { LiaStarSolid } from "react-icons/lia";

import { List } from "../../middlewares/ListStar";





export function NoteView() {

  const { user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


  const [data, setData] = useState(null);
  const [countList, setCountList] = useState();

  const navigate = useNavigate();
  const params = useParams();

  function handleBack() {
    navigate(-1);
  }


  async function handleRemoveMovieNote() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/movienotes/delete/${params.id}`);
      handleBack();
    }
  }







  useEffect(() => {
    async function fetchMovieNote() {
      const response = await api.get(`/movienotes/${params.id}`);
      setData(response.data);
      setCountList(response.data.rating);
    }



    fetchMovieNote();
  }, []);




  const listStar = List(countList);





  return (

    <Container>
      <Header />

      {
        data &&
        <Content>
          <GoHome onClick={handleBack}><AiOutlineArrowLeft />Voltar</GoHome>


          <h1>{data.title}   <div className="stars">
            {listStar.map((item, index) => (
              <LiaStarSolid key={index} />
            ))}
          </div></h1>

          <div className="createdBy">
            <img src={avatarUrl} alt="Foto de perfil" />
            <a>Por {user.name} <AiOutlineClockCircle /> {data.created_at}</a>
          </div>

          {data.tags &&
            <div className="tags">
              {
                data.tags.map(tag => (
                  <Tag
                    key={String(tag.id)}
                    title={tag.name} />
                ))

              }
            </div>}

          <p>{data.description}</p>


          <div className="actionButton">
            <Button
              title="Excluir Filme"
              onClick={handleRemoveMovieNote}
            />
            <Button
              title="Salvar alterações"
            />
          </div>


        </Content >}




    </Container >
  );
}