import styled from "styled-components";
import IImage from "./IImage";

const Image = styled.img<IImage>`
  background: ${props => `url('${props.src}')`};
  background-size: cover;
  height: ${props => props.height ? props.height : ""};
  width: ${props => props.width ? props.width : ""};
  
  @media ${({theme}) => theme.breakpoints.sm} {
    height: ${(props) => props.smHeight ? props.smHeight : ""};
    width: ${(props) => props.smWidth ? props.smWidth : ""};
  }
`
export default Image;