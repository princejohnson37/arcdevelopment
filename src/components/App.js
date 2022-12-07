import { ThemeProvider } from '@mui/material';
import Header from './ui/Header';
import customtheme from './ui/customTheme';

function App() {
  return (
    <ThemeProvider theme={customtheme}>
      <Header />
      <p>hello</p>hello
    </ThemeProvider>
  );
}

export default App;
