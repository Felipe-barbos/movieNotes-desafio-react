import styled from "styled-components";


export const Container = styled.span`

  font-size: 1.2rem;

  background: ${({ theme }) => theme.COLORS.GRAY_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: .8rem;

  padding: .5rem 1.6rem;

`;