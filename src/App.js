import { useState, useEffect } from 'react'
import Beers from './components/Beers';
import Hero from './components/Hero';
import './App.css';

function App() {

  const [beerList, setBeerList] = useState();
  const [beerType, setBeerType] = useState('ale');

  useEffect(() => {
      fetch('https://api.sampleapis.com/beers/'+beerType) // ale , stouts
      .then(response => response.json())
      .then(beers => setBeerList(beers))
      .catch(alert)
  }, [beerType]);

  return (
    <div className="App">
      <Hero beerType={beerType} setBeerType={setBeerType} />
      <div className="container-fluid bg-light">
        <Beers beerList={beerList}/>
      </div>
      
    </div>
  );
}

export default App;
