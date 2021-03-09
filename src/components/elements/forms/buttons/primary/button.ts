import styled from "styled-components";
import { BaseButton } from "../baseButton";

const Button = styled(BaseButton)`
  background: ${({theme}) => theme.colors.primary};
  color: white;
  font-weight: bold;
`
export default Button;