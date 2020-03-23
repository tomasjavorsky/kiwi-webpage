import React from "react";
import Keyboard from "./components/Keyboard";
import GlobalWrapper from "./components/GlobalWrapper";
import { ThemeProvider } from "styled-components";
import theme from "./constants/globalTheme";
import { Provider } from "react-redux";
import store from "./store/configureStore";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalWrapper>
          <Keyboard />
        </GlobalWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
