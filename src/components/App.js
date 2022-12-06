import Header from './ui/Header';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
