import React, {Component} from "react";
import Infinity from '../Loading/Infinity.gif';
import './Loading.css';

class Loading extends Component {

    render() {
        return (
          <div className="loading-container">
              <img src= {Infinity} className="loading" alt="loading"/>
          </div>
        );
    }
}

const mapStateToProps = state => ({ loading: state.appliccation.loading})

export default Loading;