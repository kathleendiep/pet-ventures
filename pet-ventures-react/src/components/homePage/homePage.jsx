import React from 'react'
import { useState } from 'react'
import Banner from '../banner';
import './homePage.scss'
import 'animate.css';
import PetContainer from '../petContainer/petContainer';
import Login from '../login/login';
import ProfilesContainer from '../profilesContainer/profilesContainer';

const HomePage = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }
  return (
    <div className="nav-bar">
      <Banner></Banner>
      <PetContainer/>
      <ProfilesContainer/>
    </div>
  )
}
export default HomePage


