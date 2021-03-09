import {DefaultTheme} from "styled-components";

export const grid: DefaultTheme = {
    default: {
        gridTemplateColumns: "1fr repeat(12, minmax(auto, 4.2rem)) 1fr",
        gap: "1rem 1rem"
    },
    sm: {
        gridTemplateColumns: "2rem repeat(6, 1fr) 2rem",
        gap: "1rem 1rem"
    },
    md: {
        gridTemplateColumns: "1rem repeat(6, 1fr) 1rem",
        gap: "1rem 1rem"
    }
}