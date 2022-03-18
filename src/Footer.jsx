import React from 'react';
import logo from './assets/images/Logo/zeroone_logo.png';

export default function Footer (){

    return(
        <div className='row footer'>
            <div className="col-4 logo">
                <img src={logo} alt="" />
            </div>
            <div className="ms-auto me-4 col-auto top-btn">
                <svg className="w-auto" width="38" height="57" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 24.8719L19 1.09912L37 24.8719M19 55.437V1.09912V55.437Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>TOP</p>

            </div>
        </div>

    )

}