import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  unstable_createMuiStrictModeTheme as createTheme,
  ThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: ["Poppins"].join(","),
  },
  palette: {
    primary: {
      main: "#152238",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
