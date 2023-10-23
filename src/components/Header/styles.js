import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`



  
  height: 10.5rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: .1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.WHITE};
  
  padding: 0 8rem;

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};

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