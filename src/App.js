// import logo from "./logo.svg";
import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Access from "./Access/Access";
import Header from "./component/Header/header";
import Sidebar from "./component/Sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Home />
      <Access />
    </div>
  );
}

export default App;
