import { Container, Content, OptionAddFilm, AddMovie } from "./styles";
import { Header } from "../../components/header";

import { MdAdd } from "react-icons/md"
import { Note } from "../../components/Note";


export function Home() {

  return (
    <Container>
      <Header />

      <OptionAddFilm>
        <h1>Meus filmes</h1>
        <AddMovie to="/newNote"> <MdAdd /> Adicionar Filme</AddMovie>
      </OptionAddFilm>

      <Content>

        <Note data={
          {
            title: "Homem Aranha 2",
            rating: 4,
            description: `Pragas nas colheitas fizeram a civilização
            humana regredir para uma sociedade agrária em futuro
            de data desconhecida.
            Cooper, ex-piloto da NASA,
            tem uma fazenda com sua família. Murphy,
            a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se.... `,
            tags: [
              { id: '1', name: 'Marvel' },
              { id: '2', name: 'Aranha' }
            ]
          }
        }
        />





      </Content>
    </Container>
  );


}