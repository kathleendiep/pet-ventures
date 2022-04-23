import { Link } from "react-router-dom";
import React from 'react'

const MainBanner = () => {
    return (
        <section className="main-banner-area main-banner-area-one animate__animated animate__fadeInDown">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-text">
                        <h2>Pet-Ventures</h2>
                        <p>Explore the world with different snacks! </p>
                        <button className="button text-link"><Link to="/about">About</Link></button>
                        </div>
                    </div>
                    <div className="col-lg-6 banner-main-img">
                        {/* Main Image */}
                            <img src="/img/snacks-world-banner.png" alt="Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainBanner;






