import styled from "styled-components";
import {ITypography} from "./ITypography";

export const Typography = styled.text<ITypography>`
  font-size: ${props => {
    switch (props.variant) {
      case "title":
        return props.theme.typography.variant.title
      case "headline":
        return props.theme.typography.variant.headline
      default:
        return props.theme.typography.variant.body2
    }
  }};
  font-weight: ${props => {
    switch (props.bold) {
      case "light":
        return props.theme.typography.bold.light
      case "medium":
        return props.theme.typography.bold.medium
      case "hard":
        return props.theme.typography.bold.hard
      default:
        return props.theme.typography.bold.light
    }
  }};
  color: ${props => props.color ? props.color : "black"};
`