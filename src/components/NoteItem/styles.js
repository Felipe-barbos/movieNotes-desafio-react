import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.GRAY_900};
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  border: ${({ theme, isnew }) => isnew ? `.1rem dashed ${theme.COLORS.GRAY_500}` : `none`};

  margin-bottom: .8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  > button{
    border:none;
    background: none;

    svg{
      font-size: 2.4rem;
    }
  }

  .button-delete{
    color:${({ theme }) => theme.COLORS.PINK};
   
  }

  .button-add{
    color:${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;
    outline: 0;
    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;