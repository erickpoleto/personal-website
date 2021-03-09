import styled from "styled-components";
import {IContainer} from "./IContainer";


export const Container = styled.div<IContainer>`
  max-width: ${ props => {
      switch (props.maxWidth) {
        case "sm":
            return "940px";
        default:
            return "100%";
      }
  }};
`