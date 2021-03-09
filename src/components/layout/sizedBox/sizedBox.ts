import styled from "styled-components";
import IBoxSized from "./ISizedBox";

const SizedBox = styled.span<IBoxSized>`
  height: ${props => props.height ? props.height : ""};
  width: ${props => props.width ? props.width : ""};
`
export default SizedBox;