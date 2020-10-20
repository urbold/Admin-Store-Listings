import React from "react";
import ReactDOM from "react-dom";
import MiniDrawer from "./comps/Appbar";
import "./styles.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MiniDrawer />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
