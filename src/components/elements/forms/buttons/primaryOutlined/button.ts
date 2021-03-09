import styled from "styled-components";
import { BaseButton } from "../baseButton";

const Button = styled(BaseButton)`
  border: ${({theme}) => `white 2px solid`};
  color: white;
  
  background: none;
`

export default Button;