import React, { Component, useState, useEffect } from 'react';
import dummy_product from '../assets/images/shop/dummy-product.svg';
import RedButton from '../elements/RedButton';
import { Link } from 'react-router-dom';



export default function Data() {
    const [useData, setUseData] = useState();
    const [isPopup, setIsPopup] = useState(false);
    const togglePopup = () => {
        setIsPopup(!isPopup);}

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
                        <RedButton label='view'/>
                    </div>
                </div>
            </div>
        )
    };

    async function pullJson() {

        const response = await fetch(apiUrl)
        const responseData = await response.json()
       // console.log(responseData)

        displayData = responseData.map(function(todo) {
            return (
                <div className="content-container product">

                    <div className="image-wrap">
                    <a className="quick-view"
                    onClick={togglePopup}>
                        <RedButton label='Quick View'/>
                    </a>
                    <img src={dummy_product} alt="coffee" />
                    </div>
                    <Link to="/Product" style={{textAlign:'center', textDecoration:'none'}}>
                    <p key={todo.id}>{todo.name}</p>
                    <br/>
                    <p>{todo.title}</p>
                    <br/>
                    {todo.salePrice
                    ? <><p style={{color: "#CC2840"}}>{todo.salePrice}</p>
                    <p style={{textDecoration: "line-through"}}>{todo.price}</p></>
                    : <p>{todo.price}</p>}
                    </Link>
                        <div className='coffee-card'>
                                <CoffeePop />
                                <div>

                        </div>
                    </div>
                </div>
            )
        })
  //      console.log(responseData)
        setUseData(displayData)

    }

    useEffect (() => {
        pullJson()
    }, [])

    return (
        <div>
           <section className='product-bar'>
          <div className='container' style={{
                        padding: "0 30px",
                    }}>
                <div className="product-row">
                    {useData}
                </div>
                </div>
            </section>
        </div>
    )
}