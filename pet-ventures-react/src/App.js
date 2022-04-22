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
import About from './components/about/about';
import LoaderPage from './components/loader/loaderpage'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoaderPage />} />
          <Route path="/" element={<Navigate replace to="/" />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/viewall" element={<ViewAll />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App