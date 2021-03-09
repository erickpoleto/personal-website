import styled from "styled-components";
import IButton from "./IButton";

export const BaseButton = styled.button<IButton>`
  box-shadow: 1px 1px 3px black;
  font-weight: 500;
  padding: ${(props) => {
    switch (props.size) {
      case "md":
        return props.theme.button.sizes.md
      case "ld":
        return props.theme.button.sizes.ld
      default:
        return props.theme.button.sizes.sm
    }
  }};
  max-width: 200px;
  border: none;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    animation: fade 100ms ease-out forwards;
  }

  @keyframes fade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.8;
    }
  }
  
  //sm
  @media ${({theme}) => theme.breakpoints.sm} {
    padding: ${(props) => props.theme.button.sizes.sm};
  }
`
