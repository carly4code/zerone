import React from "react";
import errorJpg from '../assets/images/Error/error.svg'
class error extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            x:0,
            y:0
        }
        this.init();
    }
    init() {
        this.state = {
            offsetX: '',
            offsetY: '',
            friction: 1/500
        }
        this._mouseMove = this._mouseMove.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousemove', this._mouseMove);
    }
    componentWillUnmount() {
        document.removwEventListener('mousemove', this._mouseMove);
    }
    _mouseMove(e) {
        let followX = (window.innerWidth / 2 - e.clientX);
        let followY = (window.innerHeight / 2 - e.clientY);
        let x = 0,
            y = 0;
        x +=( (-followX - x) * this.state.friction);
        y += (followY - y) * this.state.friction;
        this.setState({
          offsetX: x,
          offsetY: y
        });
      }
    // _onMouseMove = (e) => {
    //     const width = this.refs.errorContainer.clientWidth;
    //     const height = this.refs.errorContainer.clientHeight;
    //     const oX = (e.nativeEvent.offsetX/width) * 100;
    //     const oY = (e.nativeEvent.offsetY/height) * 100;
    //     // console.log()
    //     this.setState ({
    //         x:oX,
    //         y:oY
    //     });
    // }
    // _onMouseOut = () => {
    //     this.setState ({
    //         x: 0,
    //         y: 0
    //     })
    // }
    render () {
        const {x, y} = this.state;
        const maskStyle = {
            '--maskX': x,
            '--maskY': y
        }
        const offset = {
            transform: `translate(-50%, -50%) perspective(30px)
                        rotateY(${this.state.offsetX}deg)
                        rotateX(${this.state.offsetY}deg)`
        }
        return (
            <div className="padding" >
            {/* <div className="errorContainer" onMouseMove={this._onMouseMove} onMouseOut={this._onMouseOut} ref="errorContainer" style={maskStyle}>  */}
            {/* <div className = "errorWrapper">
                <h1>404</h1>
            </div>
            <div className = "errorWrapper cloneWrapper">
                <h1>404</h1>
            </div> */}
            {/* <h3> Coffee not find</h3>
            <h5> Too trued of the internet? Go fet a coffee break! </h5>
             */}
            <div className="effect">
                <div className="left">
                    <div style={{position:"relative", width:"100%", height:200, padding:20}}  className="box">
                    <h1>404</h1>
                    <h1>404</h1>
                    </div>
                    <h3> Coffee not found</h3>
                    <h5> Too trued of the internet? Go fet a coffee break! </h5>
                </div>
                <div className="right">
                    <div className="errorImg">
                        <img className="shape" src={errorJpg} alt='error-img' style={offset}></img>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default error;