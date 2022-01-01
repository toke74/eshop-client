import { ThemeProvider } from 'styled-components'

//local files
import { theme } from './util/styles/Themes'
import GlobalStyles from './util/styles/Global'
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Navbar/>
      <div>
        <h1>Hello</h1>
      </div>
   </ThemeProvider>
  );
}

export default App;
