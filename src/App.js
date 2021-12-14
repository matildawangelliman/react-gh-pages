import './App.css';
import CarouselContainer from './CarouselContainer';
import NavBar from './NavBar';
import MasonryContainer from './MasonryContainer';
import FooterContainer from './FooterContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CarouselContainer/>
      <MasonryContainer/>
      <FooterContainer/>
    </div>
  );
}

export default App;
