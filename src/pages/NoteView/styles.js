import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  margin: 0 auto;



  
`;

export const Content = styled.div`
  margin-top: 5rem;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;

  gap: 2.5rem;


 h1{
  
    font-size: 3.6rem;
    display: flex;
    gap: 1rem;
    align-items: center;

    .stars{
      margin-left: 2rem;
      display: flex;
      gap: 1rem;
      font-size: 2rem;

      color: ${({ theme }) => theme.COLORS.PINK};


    }

    
  }

  .createdBy{
   
    display: flex;
    align-items: center;

    gap: 1rem;

    > img{
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 100%;
      border: 1px solid ${({ theme }) => theme.COLORS.PINK};

    }

    svg{
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    a{
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.6rem;
     

    
    }

    
  }

  .tags{
  
    display: flex;
    gap: 1rem;
  }

  p{
    text-align: justify;
  }



  .actionButton{

    margin-top: 3rem;
    display: flex;
    gap: 4rem;


    > button:last-child {
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