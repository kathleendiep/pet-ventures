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
                <li class="facebook"><a href="https://www.linkedin.com/in/kathleen-diep/"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
                <li class="twitter"><a href="https://twitter.com/imKathleenDiep"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                <li class="twitter"><a href="mailto: kathleendiep@gmail.com"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a></li>
                <li class="whatsapp"><a href="https://github.com/kathleendiep"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a></li>
                <li class="whatsapp"><a href="https://www.kathleendiep.com"><i class="fa fa-laptop fa-2x" aria-hidden="true"></i></a></li>
            </ul>
             &copy;2022 Kathleen Diep | All Rights Reserved
            </div>
        </footer> 
    )
}

export default Footer
