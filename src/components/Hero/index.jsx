import React from 'react';

const Hero = ({ beerType, setBeerType }) => {
    return (
        <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">My favorite {beerType}</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p className='d-flex gap-3 justify-content-center'>
              <button onClick={() => setBeerType('ale')} className="btn btn-primary">Get Ales</button>
              <button onClick={() => setBeerType('stouts')}className="btn btn-secondary">Get Stouts</button>
            </p>
          </div>
        </div>
      </section>
    );
}

export default Hero;
