import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import './navBar.scss'
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = (props) => {
  return (

    <>
      <div class="nav-header">
        <div class="nav-brand">
          <img src="/img/snacks-world-logo.png"></img>
        </div>
        <i class="fa fa-bars fa-3x"></i>
        <div class="header-links">
          <ul>
            <li data-menuanchor="fourthPage"><Link to="/"> Home</Link></li>
            <li data-menuanchor="thirdPage"><Link to="/about">About</Link></li>
            <li data-menuanchor="secondPage"><Link to="/viewall">Snacks</Link></li>
            { props.isLogin ?  <button onClick={props.logout}>logout</button> : <button onClick={props.logout}>signup</button> }
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar















