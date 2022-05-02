import React from 'react'
import { useState } from 'react'
import './footer.scss'
import {  faNavicon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    return(
        <footer>
            <div className='wrapper'>
            <ul>
                <li className="facebook"><a href="https://www.linkedin.com/in/kathleen-diep/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
                <li className="twitter"><a href="https://twitter.com/imKathleenDiep"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                <li className="twitter"><a href="mailto: kathleendiep@gmail.com"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a></li>
                <li className="whatsapp"><a href="https://github.com/kathleendiep"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a></li>
                <li className="whatsapp"><a href="https://www.kathleendiep.com"><i className="fa fa-laptop fa-2x" aria-hidden="true"></i></a></li>
            </ul>
             &copy;2022 Kathleen Diep | All Rights Reserved
            </div>
        </footer> 
    )
}

export default Footer
