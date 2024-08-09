import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
