import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/homePage/homePage'
import About from './components/about/about'
import LoaderPage from './components/loader/loaderpage'
import Login from './components/login/login'
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoaderPage />} />
            <Route path="/" element={<Navigate replace to="/" />} />
            <Route path="/home" element={<LoaderPage />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/viewall" element={<ViewAll />} /> */}
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </CookiesProvider>
    </div>
  )
}
export default App