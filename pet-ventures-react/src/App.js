import React from 'react'
import { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/homePage/homePage'
import About from './components/about/about'
import LoaderPage from './components/loader/loaderpage'
import Login from './components/login/login'
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import PetContainer from './components/petContainer/petContainer';

function App() {
  const [token, setToken] = useCookies(['mytoken'])
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedOut, setLoggedOut] = useState(true)
  // to do separate log out page
    return (
      <div className="App">
        <CookiesProvider>
          <Router>
            <NavBar token={token} setToken={setToken} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut} loggedOut={loggedOut} />
            <Routes>
              <Route path="/" element={<LoaderPage />} />
              <Route path="/" element={<Navigate replace to="/" />} />
              <Route path="/loaderpage" element={<LoaderPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<Login token={token} setToken={setToken} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
              {/* <Route path="/viewall" element={<ViewAll />} /> */}
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </Router>
        </CookiesProvider>
      </div>
    )
  }
  export default App