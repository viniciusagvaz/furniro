import { ThemeProvider } from "styled-components";
import { Themes } from "./styles/themes/theme";
import "./styles/global.css";

import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
export function App(): JSX.Element {
  return (
    <ThemeProvider theme={Themes}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
