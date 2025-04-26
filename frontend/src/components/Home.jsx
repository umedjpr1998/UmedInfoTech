import React from 'react';
import './Home.css';


function Home() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: '55px' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {/* <div className="carousel-item active" data-bs-interval="1000">
                        <img src="../assets/carousel_img7.jpg" className="d-block w-100" alt="..." style={{ height: '92vh' }} />
                    </div>
                    <div className="carousel-item" data-bs-interval="1500">
                        <img src="../assets/carousel_img8.jpg" className="d-block w-100" alt="..." style={{ height: '92vh' }} />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="../assets/carousel_img5.jpg" className="d-block w-100" alt="..." style={{ height: '92vh' }} />
                    </div> */}



                    <div className="carousel-item active" data-bs-interval="1000">
                        <img src="../assets/carousel_img7.jpg" className="homeimg" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="1500">
                        <img src="../assets/carousel_img8.jpg" className="homeimg" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="../assets/carousel_img5.jpg" className="homeimg" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Home;
