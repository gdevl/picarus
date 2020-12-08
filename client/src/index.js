import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

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
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
