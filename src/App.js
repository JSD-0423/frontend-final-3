import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme/Theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
