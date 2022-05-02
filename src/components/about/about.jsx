import React from 'react'
import './about.css'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import '../footer/footer.scss'
const About = () => {
    return (
        <div>
            <div className="nav-bar">
                <NavBar></NavBar>
                <section class="col-12">
                    <div class="column text">
                        <h1>About Snack World</h1>
                    </div>
                </section>
            </div>
                    <div class="column text">
                        <p>When you travel, do you want to be able to know what unique snacks are available in each region?</p>
                        <p>With SnacksWorld, add your favorite snacks by City and Country! </p>
                    </div>
                    <div class="column text">
                        <h1>Check out the repo here</h1>
                        <div className='wrapper'>

                        <span className="icon-github"><a href="https://github.com/kathleendiep"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a></span> 
                        </div> 
                    </div>





                <Footer></Footer>
</div> 
            )
}

export default About
