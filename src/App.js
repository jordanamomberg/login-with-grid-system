import React from "react";
import Routes from "./routes";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import "./global.css";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0657FA",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
