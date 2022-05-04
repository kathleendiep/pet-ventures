import React from 'react'
import './about.css'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import '../footer/footer.scss'
const About = () => {
    return (
        <div>
            <div className="nav-bar">
                <section class="col-12">
                    <div class="column text">
                        <h1>About PetVentures</h1>
                    </div>
                </section>
            </div>
                    <div class="column text">
                    <p>Connect with other dog lovers</p>
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
