import './reset.scss';
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Access from './pages/Access';
import Meun from './pages/Meun';
import Error from './pages/Error';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Shop from "./pages/Shop";
import Infinity from './elements/styles/Infinity.gif';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';


function App() {


  // useEffect(() => {

  // },[])
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
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Access" element={<Access/>} />
              <Route path="/Meun" element={<Meun/>} />
              <Route path="/Shop" element={<Shop/>} />
              <Route path="*" element = {<Error/>} />
          </Routes>
          <Footer />
    </BrowserRouter>

  );
}

export default App;
