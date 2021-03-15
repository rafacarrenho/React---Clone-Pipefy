import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Header />
      <Board />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
