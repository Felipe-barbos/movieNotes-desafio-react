import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display:flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.GRAY_900};

  margin-bottom: .8rem;
  border-radius: 1rem;

  > svg {
    margin: 1.6rem;
  }

  > input {
    height: 5.6rem;
    width:100%;

    padding: 1.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border:0;
    outline: 0;

    &: placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }


  }

`;