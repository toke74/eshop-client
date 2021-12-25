import { ThemeProvider } from 'styled-components'
import { theme } from './util/styles/Themes'
import GlobalStyles from './util/styles/Global'

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <div>
        <h1>Hello</h1>
      </div>
   </ThemeProvider>
  );
}

export default App;
