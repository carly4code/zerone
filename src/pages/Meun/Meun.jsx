import React from 'react';
import meun_head from '../../assets/images/Meun/meun_head.jpeg';
import { Table } from "react-bootstrap";
import "./Meun.scss";



// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

// import { Fade, Rotate, Bounce, Slide, Roll } from 'react-reveal';

export default function Meun() {

    //     const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    // const FadeUp = batch(Fade(), Move(), Sticky());





    return (
        <div>
            <section className='top-bar'>
                <div className="container position-relative">
                    <div className='title position-absolute'>
                        <h1>
                            Meun
                        </h1>
                    </div>
                    <div className='offset-2 meun-img'>
                        <img src={meun_head} alt='meun-img' />
                    </div>
                </div>
            </section>

            <section className='meun-bar'>
                <div className='container'>
                    <h1>Drink</h1>
                    <hr />
                </div>

                {/* meun with table */}
                <div className='container'>
                    <div>
                        <Table className='table-borderless' responsive="lg">
                            <thead>
                                <tr>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

                {/* meun with collum */}
                <div class="container meun-table" style={{display: "flex", justifyContent: "space-between"}}>
                        <div>
                           <div class="table-head">Coffee</div> 
                           <div class="table-body">Espresso</div>
                           <div class="table-body">Macchiato</div>
                           <div class="table-body">Americano</div>
                           <div class="table-body">Piccolo</div>
                           <div class="table-body">Latte</div>
                           <div class="table-body">Cappuccino</div>
                           <div class="table-body">Falt White</div>
                        </div>
                        <div>
                           <div class="table-head">Non-coffee</div> 
                           <div class="table-body">Chai Latte</div>
                           <div class="table-body">Chocolate</div>
                           <div class="table-body">Matcha Latte</div>
                           <div class="table-body">Fresh Juice</div>
                           <div class="table-body">Lamonade</div>
                           <div class="table-body">Sparkling</div>
                        </div>
                        <div>
                           <div class="table-head">Tea</div> 
                           <div class="table-body">Assam</div>
                           <div class="table-body">Earl Grey</div>
                           <div class="table-body">Jasmine Green</div>
                           <div class="table-body">Peppermint</div>
                        </div>
                </div>

            </section>
        </div>

    )

}