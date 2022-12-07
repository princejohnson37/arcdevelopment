import Header from './ui/Header';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
