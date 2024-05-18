import React, { useEffect, useState } from 'react';

const Carousel = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        fetch('https://backend.ebeachbd.com/api/banner-list')
            .then(res => res.json())
            .then(data => setBanners(data));
    }, []);

    console.log(banners.data);


    return (

        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">

                {
                    banners?.data?.map((banner,index) =>
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={banner.id}>
                            <img src={banner.photo} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{banner.title}</h5>
                                <p>{banner.slug}</p>
                            </div>
                        </div>
                    )
                }

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
};

export default Carousel;