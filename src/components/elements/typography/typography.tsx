import styled from "styled-components";
import {ITypography} from "./ITypography";

export const Typography = styled.text<ITypography>`
  font-size: ${props => {
    switch (props.variant) {
      case "title":
        return props.theme.typography.variant.size.title
      case "headline1":
        return props.theme.typography.variant.size.headline1
      case "headline2": 
        return props.theme.typography.variant.size.headline2
      case "headline3":
        return props.theme.typography.variant.size.headline3
      case "body1":
        return props.theme.typography.variant.size.body1
      case "body2":
        return props.theme.typography.variant.size.body2
      case "body3":
        return props.theme.typography.variant.size.body3
      default:
        return props.theme.typography.variant.size.body2
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
  
  @media ${({theme}) => theme.breakpoints.sm} {
    font-size: ${props => {
      switch (props.variant) {
        case "title":
          return props.theme.typography.variant.mediaSize.title
        case "headline1":
          return props.theme.typography.variant.mediaSize.headline1
        case "headline2":
          return props.theme.typography.variant.mediaSize.headline2
        case "headline3":
          return props.theme.typography.variant.headline3
        case "body1":
          return props.theme.typography.variant.mediaSize.body1
        case "body2":
          return props.theme.typography.variant.mediaSize.body2
        case "body3":
          return props.theme.typography.variant.mediaSize.body3
        default:
          return props.theme.typography.variant.mediaSize.body2
      }
    }};
  }
`