import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
  width: 100%;

  margin: 0 auto;
  height: 100vh;
  display:flex;
  flex-direction: column;
`;



export const Content = styled.div`

  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  gap: 4rem;

  margin-top: 2rem;

  padding: 4rem;

  overflow-y: scroll;



  h1{
    font-size: 3.6rem;
    font-weight: 500;

  }

  textarea{
    display: block;
    width: 100%;
    height: 27.5rem;
  }

  .titleNote{
    display: flex;
    gap: 4rem;

  }

  .tags{

    padding: 1.6rem;

    background: ${({ theme }) => theme.COLORS.BLACK_300};
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 2.4rem;


    border-radius: .8rem;

  }


  .actionButton{
    display: flex;
    gap: 4rem;


    > button:first-child {
      background: ${({ theme }) => theme.COLORS.BLACK_300};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const GoHome = styled(Link)`
  display: flex;
  align-items: center;
  gap: .3rem;
  color: ${({ theme }) => theme.COLORS.PINK};
  cursor: pointer;

  
`;