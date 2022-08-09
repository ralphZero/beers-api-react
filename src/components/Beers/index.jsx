import React, { useState, useEffect } from 'react';

const Beers = () => {

    const [beerList, setBeerList] = useState();
    const [beerType, setBeerType] = useState('ale');
    useEffect(() => {
        fetch('https://api.sampleapis.com/beers/'+beerType) // ale , stouts
        .then(response => response.json())
        .then(beers => setBeerList(beers))
        .catch(alert)
    }, [beerType]);

    if(!beerList) {
        return <h2>Loading...</h2>
    }
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    beerList.map(beer => (
                        <li key={beer.id}>{beer.name}</li>
                    ))
                }
            </div>
        </>
    );
}

export default Beers;
