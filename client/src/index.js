import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const picarus = createMuiTheme({
  palette: {
    primary: {
      main: "#C678DD",
    },
    secondary: {
      main: "#61AFEF",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={picarus}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
