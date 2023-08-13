import React, { Component, useState, useEffect } from 'react';
import award_a from '../assets/images/shop/award1.svg'
import award_b from '../assets/images/shop/award2.svg'
import Data from './Data';




function Shop() {

    return (
        <><div className='shop-wrapper'>
            <div className="page-margin-wrapper">
                <section className='shop-top-column'>
                    <div className='container' style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 30px",
                    }}>
                        <p
                            style={{
                                fontWeight: "500",
                                fontSize: "2rem"
                            }}>Shop</p>
                        <div className='awards'>
                            <img src={award_a} className="Award-logo" />
                            <img src={award_b} className="Award-logo" />
                        </div>
                    </div>
                    <hr />
                </section>
                <Data />
            </div>
        </div>

        </>

    )

}

export default Shop;