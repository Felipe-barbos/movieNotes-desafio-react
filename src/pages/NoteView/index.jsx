import { Tag } from "../../components/Tag";
import { Header } from "../../components/header";
import { Container, GoHome, Content } from "./styles";

import { AiOutlineArrowLeft, AiOutlineClockCircle } from "react-icons/ai";
import { LiaStarSolid } from "react-icons/lia";

import { List } from "../../middlewares/ListStar";

export function NoteView() {

  const listStar = List(4);

  return (

    <Container>
      <Header />

      <Content>
        <GoHome to="/home"><AiOutlineArrowLeft />Voltar</GoHome>

        <h1>Homem Aranha 2   <div className="stars">
          {listStar.map((item, index) => (
            <LiaStarSolid key={index} />
          ))}
        </div></h1>

        <div className="createdBy">
          <img src="https://github.com/felipe-barbos.png" alt="Foto de perfil" />
          <a>Por Felipe Barbosa <AiOutlineClockCircle /> 23/05/22 ás 08:00</a>
        </div>

        <div className="tags">
          <Tag title="Spider-man" />
          <Tag title="Drama" />
          <Tag title="Ação" />
        </div>

        <p>Pragas nas colheitas fizeram a civilização
          humana regredir para uma sociedade agrária em futuro
          de data desconhecida.
          Cooper, ex-piloto da NASA,
          tem uma fazenda com sua família. Murphy,
          a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se....Pragas nas colheitas fizeram a civilização
          humana regredir para uma sociedade agrária em futuro
          de data desconhecida.
          Cooper, ex-piloto da NASA,
          tem uma fazenda com sua família. Murphy,
          a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se....
          Pragas nas colheitas fizeram a civilização
          humana regredir para uma sociedade agrária em futuro
          de data desconhecida.
          Cooper, ex-piloto da NASA,
          tem uma fazenda com sua família. Murphy,
          a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se....</p>


      </Content>

    </Container >
  );
}