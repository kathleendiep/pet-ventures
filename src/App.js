import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import HomePage from './components/homePage/homePage';
import ViewAll from './components/viewAll/viewAll';
import About from './components/about/about';
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/viewall" element={<ViewAll />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </Router>
    </div>
  )
}
export default App