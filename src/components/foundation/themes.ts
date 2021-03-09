import { DefaultTheme } from "styled-components";
import { typography } from "./typographyTheme";
import { colors } from "./colors";
import { buttonsTheme } from "./buttonsTheme";
import { sizesTheme } from "./sizesTheme";
import {breakpoints} from "./breakpoints";
import {grid} from "./grid";

export const theme: DefaultTheme = {
    colors: colors,
    button: buttonsTheme,
    typography: typography,
    sizes: sizesTheme,
    grid: grid,
    breakpoints: breakpoints
}