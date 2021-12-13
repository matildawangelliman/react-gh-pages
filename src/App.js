import './App.css';
import HeroCarousel from './HeroCarousel';
import NavBar from './NavBar';
import MasonryContainer from './MasonryContainer'
import FooterContainer from './FooterContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroCarousel/>
      <MasonryContainer/>
      <FooterContainer/>
    </div>
  );
}

export default App;
