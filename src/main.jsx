import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { MyContext } from "./myContext";
import GlobalStyles from "./styles/global";
import temas from "./styles/temas";

import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={temas}>
      <GlobalStyles />

      <MyContext.Provider value={{email :'almeida@gmail.com'}}>
        <Routes />
      </MyContext.Provider >
    </ThemeProvider>
  </React.StrictMode>
);
