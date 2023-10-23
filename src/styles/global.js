import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
  }


  :root{
    font-size: 62.5%
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea{
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1.6rem;
  }

  a{
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
    filter:brightness(0.9);
  }

  ::-webkit-scrollbar{
    width: .8rem;
  }

  ::-webkit-scrollbar-track{
   background: transparent;
   border-radius: 4rem;
  }

  ::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 4rem;
  }
`;


