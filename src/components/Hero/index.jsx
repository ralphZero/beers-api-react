import React from 'react';

const Hero = () => {
    return (
        <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">My Favorite Beers</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p className='d-flex gap-3 justify-content-center'>
              <a href="/" className="btn btn-primary">Get Ales</a>
              <a href="/" className="btn btn-secondary">Get Stouts</a>
            </p>
          </div>
        </div>
      </section>
    );
}

export default Hero;
