import React from 'react'
import { useState } from 'react'
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import Banner from '../banner';
import './homePage.scss'
import 'animate.css';

const HomePage = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }
  return (
    <div className="nav-bar">
      <NavBar></NavBar>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  )
}
export default HomePage


