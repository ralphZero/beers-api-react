import './App.css';
import Beers from './components/Beers';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="container-fluid bg-light">
        <Beers />
      </div>
      
    </div>
  );
}

export default App;
