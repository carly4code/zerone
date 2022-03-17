
import logo from './logo.svg';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home/Home'

import { Route, Link } from 'react-router-dom'

import Header from "./component/Header/header";
import Sidebar from "./component/Sidebar/sidebar";


function App() {
  return (
    <div className="App">
      <Home/ >
    </div>
  );
}

export default App;
