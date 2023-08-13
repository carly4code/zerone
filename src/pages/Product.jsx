import React, { Component, useState, useEffect } from 'react';
import dummy_product from '../assets/images/shop/dummy-product.svg'
import RedButton from '../elements/RedButton';

const ProductView = ({title, overview, salePrice, price}) =>{
    return(
    <div className='container' style={{
        display: "flex",
        paddingLeft: "0",
        gap:"3rem",
    }}>
        <div className='product-img'>
            <img src={dummy_product} className="Award-logo" />
        </div>
        <div className='product-detail'>
        <div className='heading'>{title}</div>
        <div className='subhead'>{overview}</div>
        <div className='price'>{salePrice
                    ? <><p style={{color: "#CC2840"}}>HKD${salePrice}</p>
                    <p style={{textDecoration: "line-through"}}>HKD${price}</p></>
                    : <p>HKD${price}</p>}</div>
        <RedButton width='50%' label='Add to chart'/>
        </div>
    </div>
    );
}




function Product() {

    return (
        <><div className='product-page-wrapper'>
            <div className="page-margin-wrapper">
                {/*  ----product over view-------- */}
                <section className='product-view'>
                    <ProductView title="product title demo" overview="Some subtitle of the product with long line demo demo. This should be reallllllllly long." price="400"/>
                </section>
                <section className='note-bean'>
                    <div className='container'>
                        <p className='note-title'>Note of the bean</p>
                        <div style={{paddingInline: '20px'}}>
                        <div className='detail'>
                        <p className='note-left'>Country</p>
                        <p className='note-right'>Ethipoia</p>
                        </div>
                        <div className='detail'>
                        <p className='note-left'>Country</p>
                        <p className='note-right'>Ethipoia</p>
                        </div>
                        </div>
                    </div>
                </section>
                <section className='big-note-bean'>
                    <div className='container'>
                    <p className='note-title'>About this coffee</p>
                        <div className='big-detail'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    </div>
                </section>
            </div>
        </div>

        </>

    )

}

export default Product;