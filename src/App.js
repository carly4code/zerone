
import logo from './logo.svg';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home/Home';
import Access from './Access/Access';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./component/Header/header";
import Sidebar from "./component/Sidebar/sidebar";


function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Home />
      <Access />
    <Header/>
    <Sidebar />
    {/* <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/access" element={<Access/>} />
      

    </Routes> */}
    </div>
     
    // </BrowserRouter>
  );
}

export default App;
