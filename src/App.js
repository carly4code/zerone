import logo from './logo.svg';
import './App.css';
// import Infinity from './Components/Infinity.js';

function App() {
  return (
    <div>
     <svg viewBox= "-2000 -1000 4000 2000">
        <path id="stroke" d="M354-354A500 500 0 1 1 354 354L 354L-354A500 500 0 1 0-354 354z"></path>
        <use xlink:href="#stroke" stroke-dasharray="1570 5143" stroke-dashoffset= "6713px"></use>
      </svg>
    </div>
  );
}

export default App;
