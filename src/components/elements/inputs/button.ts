import styled from "styled-components";

export const Button = styled.button`
  border: none;
  box-shadow: 1px 1px 3px black;
  padding: 5px 20px;
  background: ${({theme}) => theme.buttonColors.primary};
  
  :active {
    opacity: 0.8;
    animation: fade 200ms ease-out forwards;
  }

  @keyframes fade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.3;
    }
  }

`
