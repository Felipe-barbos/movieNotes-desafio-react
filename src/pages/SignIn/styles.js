import styled from "styled-components";

import backgroundImg from "../../assets/backgroundLogin.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`

  height: 100vh;
  display: flex;
  align-items: stretch;

`;

export const Form = styled.form`

  padding: 0 13.6rem;

  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1{
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2{
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }


  >p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }


  

`;

export const Background = styled.div`

  flex:1;
  background: url(${backgroundImg}) no-repeat center center;

  background-size: cover;
`;

export const GoHome = styled(Link)`
  width:100%;

  padding: 1.6rem 14rem;


  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: 1rem;

  font-size: 2rem;


  &:disabled{
  opacity: 0.5;
}
`;

export const GoSignUp = styled(Link)`

  margin-top: 12.4rem;
  color: ${({ theme }) => theme.COLORS.PINK};

  background-size: cover;
`