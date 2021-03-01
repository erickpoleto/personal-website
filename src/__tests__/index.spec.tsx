import React, {ReactElement} from 'react';
import renderer from 'react-test-renderer'
import Home from "../pages";
import 'jest-styled-components'
import {theme} from "../components/foundation/themes";
import {ThemeProvider} from "styled-components";

const renderWithThemeProvider = (container: ReactElement) => {
    return <ThemeProvider theme={theme}>{container}</ThemeProvider>
}

test("render 'Typography' element", () => {
    const wrapped = renderWithThemeProvider(<Home/>);
    const tree = renderer.create(wrapped).toJSON();
    expect(tree.children).toMatchSnapshot();
});