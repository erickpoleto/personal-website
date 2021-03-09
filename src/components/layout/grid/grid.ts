import styled from "styled-components";
import IGrid from "./IGrid";

const Grid = styled.div<IGrid>`
  display: grid;
  grid-template-columns: ${(props) => props.templateColumns ? 
          props.templateColumns : 
          props.theme.grid.default.gridTemplateColumns};
  grid-template-rows: ${(props) => props.templateRows ? props.templateRows :  "max-content"};
  grid-template-areas: ${(props) => props.templateAreas ? props.templateAreas : "" };
  gap: ${(props) => props.gap ? props.gap : props.theme.grid.default.gap};
  margin: ${(props) => props.margin ? props.margin : 0};
  height: ${(props) => props.height ? props.height : ""};
  align-items: ${(props) => props.alignItems ? props.alignItems : ""};
  justify-items: ${(props) => props.justifyItems ? props.justifyItems : ""};
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : ""};
  align-content: ${(props) => props.alignContent ? props.justifyContent : ""};

  @media ${({theme}) => theme.breakpoints.ld} {
    grid-template-columns: ${(props) => props.templateColumns ?
            props.templateColumns :
            ""};
  }

  @media ${({theme}) => theme.breakpoints.md} {
    grid-template-columns: ${(props) => props.mdTemplateColumns ? props.mdTemplateColumns :
            ""};
  }

  @media ${({theme}) => theme.breakpoints.sm} {
    grid-template-columns: ${(props) => props.smTemplateColumns ? props.smTemplateColumns :
            ""};
    grid-template-rows: ${(props) => props.smTemplateRows ? props.smTemplateRows :
            ""};
  }
`
export default Grid;