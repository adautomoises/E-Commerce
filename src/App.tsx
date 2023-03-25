import Router from "./routes";
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle /> 
    </ThemeProvider>
  );
}

export default App;
