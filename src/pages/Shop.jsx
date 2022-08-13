import React, { Component, useState } from 'react';
import award_a from '../assets/images/shop/award1.svg'
import award_b from '../assets/images/shop/award2.svg'
import dummy_product from '../assets/images/shop/dummy-product.svg'


function CoffeeCard(props) {
    const [isPopup, setIsPopup] = useState(false);
    // let { isSale } = props.isSale;

    // const price = (props) => {
    //     if (isSale) {
    //         return <><p>
    //             {props.salePrice}
    //         </p><p>
    //                 {props.price}
    //             </p></>;
    //     } else {
    //         return <p>HK${props.price}</p>;
    //     }
    // }


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
                        <img src={dummy_product} alt="" />
                        <p className='heading'>{title}</p>
                        <p className='subhead'>{overview}</p>
                        <button>View Detail</button>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <><div className='coffee-card' onClick={() => {
            setIsPopup(!isPopup);
        }}>
            <CoffeePop />
            <div style={{ position: "relative" }}>
                <a className="quick-view">
                    <p>Quick view</p>
                </a>
                <div className='image-wrapper'>
                    <img src={dummy_product} />
                </div>
            </div>
            <p>{props.title}</p>
             <p>{props.price} </p>
        </div>
        </>
    )
};

function Shop() {
    return (
        <><div className='shop-wrapper'>
            <div className="page-margin-wrapper">
                <section className='shop-top-column'>
                    <div className='container' style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingLeft: "0",
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

                <section className='product-bar'>
                    <div className="product-row">
                        <CoffeeCard title="Costa Rica Tarrazu Canet Mozart Raisin Honey K.530"
                            price="45" />
                        <CoffeeCard />
                        <CoffeeCard />
                        <CoffeeCard />

                    </div>
                </section>
            </div>
        </div>

        </>

    )

}

export default Shop;