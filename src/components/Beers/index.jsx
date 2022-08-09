import BeerItem from '../BeerItem.jsx';

const Beers = ({ beerList }) => {

    if(!beerList) {
        return <h2>Loading...</h2>
    }
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 card-group">
                {
                    beerList.map(beer => (
                        <BeerItem key={beer.id} name={beer.name} image={beer.image} rating={beer.rating} price={beer.price} />
                    ))
                }
            </div>
        </>
    );
}

export default Beers;
