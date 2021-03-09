import styled from "styled-components";
import IRow from "./IRow";

const Row = styled.div<IRow>`
  grid-column-start: ${(props) => props.start ? props.start : "1"};
  grid-column-end: ${(props) => props.end ? props.end : "12"};
  
  @media ${({theme}) => theme.breakpoints.md} {
    grid-row-start: ${(props) => props.mdStart ? props.mdStart : "1"}
    grid-row-end: ${(props) => props.mdEnd ? props.mdEnd : "1"}
  }

  @media ${({theme}) => theme.breakpoints.sm} {
    grid-row-start: ${(props) => props.smStart ? props.smStart : "1"}
    grid-row-end: ${(props) => props.smEnd ? props.smEnd : "1"}
  }
`
export default Row;