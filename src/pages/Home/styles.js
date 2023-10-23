
import styled from "styled-components";
import { Link } from "react-router-dom";





export const Container = styled.div`
  width: 100%;

  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction:column;
`;

export const OptionAddFilm = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  padding: 0 5rem;


  > h1 {
    font-size: 3.2rem;
  }

  
`;

export const Content = styled.div`

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  
 
  margin-top: 2rem;
  


  overflow-y: auto;

  padding: 0 5rem;


`;



export const AddMovie = styled(Link)`
  padding: 2rem 3.5rem;

  border: none;
  border-radius: .8rem;

  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  align-items: center;

  gap:.2rem;

  svg {
  font-size: 2.4rem;
  }
`;
