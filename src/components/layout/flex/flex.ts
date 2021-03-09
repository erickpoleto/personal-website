import styled from "styled-components";
import IFlex from "./IFlex";

const Flex = styled.div<IFlex>`
  display: flex;
  grid-area: ${(props) => props.gridArea ? props.gridArea : ""};
  grid-row: ${(props) => props.gridRow ? props.gridRow : ""};
  grid-column: ${(props) => props.gridColumn ? props.gridColumn : ""};
  flex-direction: ${(props) => props.flexDirection ? props.flexDirection : ""};
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : ""};
  align-content: ${(props) => props.alignContent ? props.alignContent : ""};
  align-items: ${(props) => props.alignItems ? props.alignItems : ""};
`
export default Flex;