import React from 'react';
import logo from '../assets/images/Logo/zeroone_logo.png';
import Btn_top from '../elements/Btn_top'

export default function Footer (){

    return(
        <div className='row footer'>
            <div className="col-4 logo">
                <img src={logo} alt="" />
            </div>
           <Btn_top />
        </div>
    )
}