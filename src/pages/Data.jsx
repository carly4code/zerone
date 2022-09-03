import React, { Component, useState, useEffect } from 'react';
import dummy_product from '../assets/images/shop/dummy-product.svg'


export default function Data() {
    const [useData, setUseData] = useState();
    const [isPopup, setIsPopup] = useState(false);

    const apiUrl = 'http://localhost:8000/Shop'
    let displayData

    const CoffeePop = ({
        title,
        overview,
        image,
    }) => {
        return (
            <div className={
                isPopup ? "popup-wrap expanded" : "popup-wrap"
            }>
                <div className="popup">
                    <div className="content-container">
                        <div className='image-wrap'>
                        <img src={dummy_product} alt="" />
                        </div>
                        <p className='heading'>{title}</p>
                        <p className='subhead'>{overview}</p>
                        <button>View Detail</button>

                    </div>
                </div>
            </div>
        )
    };

    async function pullJson() {
        const response = await fetch(apiUrl)
        const responseData = await response.json()
        console.log(responseData)
        displayData = responseData.map(function(todo) {
            return (
                <div className="content-container product">

                    <div className="image-wrap">
                    <a className="quick-view">
                    <p>Quick view</p>
                    </a>
                    <img src={dummy_product} alt="coffee" />
                    </div>
                    <p key={todo.id}>{todo.name}</p>
                    <br/>
                    <p>{todo.title}</p>
                    <p>{todo.price}</p>
                    {/* <button>View Detail</button> */}
                        <div className='coffee-card' onClick={() => {
                                setIsPopup(!isPopup);
                            }}>
                                <CoffeePop />
                                <div>
                                {/* <a className="quick-view">
                                    <p>Quick view</p>
                                </a> */}
                        </div>
                    </div>
                </div>
            )
        })
        console.log(responseData)
        setUseData(displayData)

    }

    useEffect (() => {
        pullJson()
    }, [])

    return (
        <div>
           <section className='product-bar'>
                <div className="product-row">
                    {useData}
                </div>
            </section>
        </div>
    )
}