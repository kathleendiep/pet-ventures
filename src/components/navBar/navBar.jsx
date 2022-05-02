import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './navBar.scss'
import { useNavigate } from 'react-router-dom';


const NavBar = (props) => {

  let navigate = useNavigate()
  const handleLogOut = (e) => {
    e.preventDefault()
    console.log("before", props.token)
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
      <div className="nav-header">
        <div className="nav-brand">
          <h1 className="logo"> Pet-Ventures </h1>
          {/* <img src="/img/snacks-world-logo.png"></img> */}
        </div>
        <i className="fa fa-bars fa-3x"></i>
        <div className="header-links">
          <ul>
            <li data-menuanchor="fourthPage"><Link to="/"> Home</Link></li>
            <li data-menuanchor="thirdPage"><Link to="/about">About</Link></li>
            <li data-menuanchor="secondPage"><Link to="/viewall">Snacks</Link></li>
            {props.loggedIn ? 
             <li><button className="button-log" onClick={handleLogOut}>logout</button> </li>
              :
               <><li><button className="button-log"><Link to="/login">Register</Link></button></li> <li> <button className="button-log"><Link to="/login">Login</Link></button></li></>}

          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar















