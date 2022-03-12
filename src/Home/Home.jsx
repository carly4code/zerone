import React from 'react';
import './Home.scss';

import '../assets/Home/hero.jpg';

export default function Home (){

    return(
        <>
            <section className='hero row'>
                    <div className="col-8 offset-4 img-container">
                        <img src="../assets/Home/hero.jpg" alt="zeroone" />
                    </div>
            </section>  
        </>

    )

}