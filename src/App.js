// import logo from './logo.svg';
import './reset.scss';
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Access from './pages/Access';
import Meun from './pages/Meun';
// import { Routes, Route } from 'react-router';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Infinity from './elements/styles/Infinity.gif';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  // const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //       setLoading(true)
  //       setTimeout(() => {
  //           setLoading(false)
  //       }, 3500)
  //   }, [])

  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
        {/* { loading ? (
              <div className="loading-container">
                <img src= {Infinity} className="loading" alt="loading"/>
              </div>
              ) : ( */}
        
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Access" element={<Access/>} />
              <Route path="/Meun" element={<Meun/>} />
          </Routes>
      
          {/* ) */}
        {/* } */}
    </BrowserRouter>
  );
}

export default App;
