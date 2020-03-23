import React from "react";
import Keyboard from "./components/Keyboard";
import GlobalWrapper from "./components/GlobalWrapper";
import { ThemeProvider } from "styled-components";
import theme from "./constants/globalTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalWrapper>
        <Keyboard />
      </GlobalWrapper>
    </ThemeProvider>
  );
}

export default App;
