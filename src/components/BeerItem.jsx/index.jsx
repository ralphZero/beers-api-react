import React from 'react';

const BeerItem = ({ name, image, rating, price }) => {
  const buildStars = () => {
    let stars = '';
    for (let i = 0; i < Math.floor(rating.average); i++) {
      stars += '⭐️'
    }
    return stars;
  }
  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex flex-column justify-content-between">
          <h3 class="card-title">{name}</h3>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <b className="me-3">{price}</b>
              <button type="button" className="btn btn-sm btn-outline-primary">Buy</button>
            </div>
            <small className="text-muted">{buildStars()}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeerItem;
