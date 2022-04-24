import React from 'react';
import logo from './assets/images/Logo/zeroone_logo.png';
import BackToTopBTN from './element/BackToTopBtn'

export default function Footer (){

    return(
        <div className='row footer'>
            <div className="col-4 logo">
                <img src={logo} alt="" />
            </div>
           <BackToTopBTN />
        </div>
    )
}