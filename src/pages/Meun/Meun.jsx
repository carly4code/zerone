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
        <div style={{paddingLeft: 40}}>
            <section className='top-bar w-100 overflow-hidden'>
                <div className="container position-relative">
                    <div className='position-absolute'>
                        <h1>
                            Meun
                        </h1>
                    </div>
                    <div className='meun-img offset-2 overflow-hidden'>
                        <img src={meun_head} alt='meun-img' />
                    </div>
                </div>
            </section>

            <section className='meun-bar'>
                <div className='container'>
                    <h1>Drink</h1>
                    <hr />
                </div>
                <div class="container meun-table">
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

                <div className='container'>
                    <h1>Pour over</h1>
                    <p style={{color:"#787777"}}>Single origin hand drip coffee</p>
                    <hr />
                </div>

                <div class="container meun-table">
                        <div>
                           <div class="table-body">Ethiopia Guji D-Minor Natural</div>
                           <div class="table-body">Ethiopia Sidama Bensa Washed G1 74158</div>
                           <div class="table-body">Colombia Cauca Finca El Paraiso Double Anaerobic Flor Lichi</div>
                           <div class="table-body">Costa Rica Brunca Rivense Tres Piedras Black Honey</div>
                           <div class="table-body">Brazil Sun De Minas Sao Jose Anaerobic-Cima</div>
                           <div class="table-body">Brazil Sun De Minas Sao Jose Anaerobic-Cima Brazil Sun De Minas Sao Jose Anaerobic-Cima Brazil Sun De Minas Sao Jose Anaerobic-Cima</div>

                        </div>
                </div>

                <div className='container'>
                    <h1>Food</h1>
                    <p style={{color:"#787777"}}>Food subtitle</p>
                    <hr />
                </div>
                <div class="container meun-table">
                        <div>
                           <div class="table-head">Scone</div> 
                        </div>
                        <div>
                           <div class="table-head">Brunch</div> 
                           <div class="table-body">Slow cook chicken  breast w/ salad
                           <p style={{color:"#787777"}}>there is some description of the food: IBERICO HAM TOAST + cream cheese + sourdough + pesto</p>
                           </div> 
                           <div class="table-body">Egg Benedict w/ salmon</div>
                           <div class="table-body">Coconut Milk Chia Seed Bowl</div>
                           <div class="table-body">Smashed Avocado Toast</div>
                           <div class="table-body">Iberico Ham Toast</div>
                           <div class="table-body">Smoked Salmon Toast</div>
                        </div>
                        </div>

            </section>
        </div>

    )

}