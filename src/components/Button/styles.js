import styled from "styled-components";


export const Container = styled.button`
  width:100%;

  padding: 1.6rem 14rem;


  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: 1rem;


  &:disabled{
    opacity: 0.5;
  }

`;