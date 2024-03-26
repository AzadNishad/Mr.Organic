import Hero from './components/Hero';
import NavBar from './components/NavBar'
import Highlight from './components/Highlight'
import BestSellingProduct from './components/BestSellingProduct'
import TrendingProduct from './components/TrendingProduct'
// import SliderTest from './components/SliderTest'


function App() {
  return (
    <>
      <NavBar />
      <Hero/>
      <Highlight />
      <BestSellingProduct/ >
      <TrendingProduct/>
      {/* <SliderTest/> */}
    </>
  );
}

export default App;
