import './App.css';
// import Navigation from './Navigation';
import HeroCarousel from './HeroCarousel';
import NavBar from './NavBar';
import MasonryContainer from './MasonryContainer'


function App() {
  return (
    <div className="App">
      {/* <Navigation/>
       */}
      <NavBar/>
      <HeroCarousel/>
      <MasonryContainer/>
    </div>
  );
}

export default App;
