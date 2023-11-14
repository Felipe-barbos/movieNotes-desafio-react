
import { List } from "../../middlewares/ListStar";
import { Tag } from "../Tag";
import { Container } from "./styles";

import { LiaStarSolid } from "react-icons/lia";


export function Note({ data, ...rest }) {

  const listStar = List(data.rating);


  return (
    <Container  {...rest}>

      <h1>{data.title}</h1>

      <div className="stars">
        {listStar.map((item, index) => (
          <LiaStarSolid key={index} />
        ))}
      </div>

      <p>{data.description}</p>



      <footer>
        {
          data.tags.map(tag =>
            <Tag
              title={tag.name}
              key={tag.id}
            />

          )
        }
      </footer>

    </Container>
  );
}

