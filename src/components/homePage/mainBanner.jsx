import { Link } from "react-router-dom";
import React from 'react'

const MainBanner = () => {
    return (
        <section className="main-banner-area main-banner-area-one animate__animated animate__fadeInDown">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-text">
                        <h2 class="animate__animated animate__bounce animate__delay-.5s">Snack World</h2>
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


<div class="overlay__inner">

<h1 class="overlay__title">
    Woof Woof
    <span class="text-gradient">      pet owners</span>
</h1>

<p class="overlay__description">
    find and connect to furiends
    {/* <strong>We're gonna talk accessibility, too.</strong> */}
</p>

<div class="overlay__btns">
    <button class="overlay__btn overlay__btn--colors">
        <span class="overlay__btn-emoji">🎨</span>
    </button>
</div>
<div className="col-lg-6 banner-main-img">
{/* Main Image */}
    <img src="petventures-mainbanner.png" alt="Image" />
</div>







