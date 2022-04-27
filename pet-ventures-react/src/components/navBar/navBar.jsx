import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './navBar.scss'
import { useNavigate } from 'react-router-dom';


const NavBar = (props) => {

  let navigate = useNavigate()
  const handleLogOut = (e) => {
    e.preventDefault()
    console.log("hello")
    props.setToken('mytoken', null)
    console.log(props.token)
    props.setLoggedOut(true)
    props.setLoggedIn(false)
    console.log(props.loggedOut)
    // make a modal for signout 
    navigate('/home')
  }

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
            {props.loggedIn ? 
             <li><button onClick={handleLogOut}>logout</button> </li>
              :
               <><li><button><Link to="/login">Register</Link></button></li> <li> <button><Link to="/login">Login</Link></button></li></>}

          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar















