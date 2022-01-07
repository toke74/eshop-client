import { ThemeProvider } from 'styled-components'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//local files
import { theme } from './util/styles/Themes'
import GlobalStyles from './util/styles/Global'
import Navbar from './components/navbar/Navbar';
import Home from './Pages/home/Home';

const Conatainer = styled.div`
    /* margin-top:70px; */
`

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Navbar/>
      <Conatainer>
         <Home/>
      </Conatainer>
   </ThemeProvider>
  );
}

export default App;
