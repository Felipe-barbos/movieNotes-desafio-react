import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK_300};

  border: none;
  border-radius: 1rem;

  padding: 3.2rem;
  margin-bottom: 1.6rem;
  cursor: pointer;

  > h1{
    text-align: left;
    flex: 1;

    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .stars{
    margin-top: .8rem;
    display: flex;
    gap: .5rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.PINK};

  }

  > p{
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    text-align: justify;
  }

  > footer{
    margin-top: 1.5rem;
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
    gap: 1rem;
  }
`;