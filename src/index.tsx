import React from "react";
import { render } from "react-dom";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import CssBaseline from "@mui/material/CssBaseline";

const container = document.getElementById("root")!;

render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  container
);

reportWebVitals();
