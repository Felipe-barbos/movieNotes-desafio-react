
import styled from "styled-components";
import { Link } from "react-router-dom";





export const Container = styled.div`
  width: 100%;

  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction:column;


  > header{
     
  height: 10.5rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: .1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.WHITE};
  
  padding: 0 8rem;

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};

  }

  }

   
`;

export const SearchInput = styled.div`
  width: 90rem;
  margin: 6.4rem 2.4rem;
  display:flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.GRAY_900};

  border-radius: 1rem;
  

> svg {
  margin: 1.6rem;
}

> input {
  height: 5.6rem;
  width:100%;

  padding: .3rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background: transparent;

  border:0;
  outline: 0;

  &:placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }


}

`;

export const Profile = styled(Link)`

  display:flex;
  align-items:center;

  > img{
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 100%;

  }

  >div{
    display: flex;
    flex-direction: column;

    margin-right: 1.0rem;
    line-height: 2.4rem;

    a{
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_500};

      cursor: pointer;


      &:hover{
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
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
  overflow-y: auto;

  margin: 3rem;

 > h1{
    align-self: center;
    margin: 5rem;
    font-size: 5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
  }


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
