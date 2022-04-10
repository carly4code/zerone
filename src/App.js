// import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Access from './pages/Access/Access';
import Meun from './pages/Meun/Meun';
// import { Routes, Route } from 'react-router';
import Header from "./component/Header/header";
import Sidebar from "./component/Sidebar/sidebar";
import Infinity from './Loading/Infinity.gif';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3500)
    }, [])

  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
        { loading ? (
              <div className="loading-container">
                <img src= {Infinity} className="loading" alt="loading"/>
              </div>
              ) : (
        
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Access" element={<Access/>} />
              <Route path="/Meun" element={<Meun/>} />
          </Routes>
      
          )
        }
    </BrowserRouter>
  );
}

export default App;
