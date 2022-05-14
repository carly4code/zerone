import React from 'react';
import meun_head from '../assets/images/Meun/meun_head.jpeg';
import "./styles/Meun.scss";



// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

// import { Fade, Rotate, Bounce, Slide, Roll } from 'react-reveal';

const MeunTitle = ({
    title,
    subtitle,
}) => {
    return (
        <div className='container'>
            <h1
                style={{
                    fontWeight: "500",
                    fontSize: "2rem"
                }}>{title}</h1>
            {subtitle ? <p style={{ color: "#787777" }}>{subtitle}</p> : null}
            <hr />
        </div>
    );
}


export default function Meun() {

    return (
        <div className='meun-wrapper'>
            <div className="page-margin-wrapper">
                <section className='top-column'>

                        <div className='page-header overflow-hidden'>
                            <img src={meun_head} alt='meun-img' />

                            <div className='page-heading'>
                                <h1>
                                    Meun
                                </h1>
                            </div>
                        </div>

                </section>

                <section className='meun-bar'>
                    <MeunTitle title="Drink" />
                    <div className="container meun-table">
                        <div>
                            <div className="table-head">Coffee</div>
                            <div className="table-body">Espresso</div>
                            <div className="table-body">Macchiato</div>
                            <div className="table-body">Americano</div>
                            <div className="table-body">Piccolo</div>
                            <div className="table-body">Latte</div>
                            <div className="table-body">Cappuccino</div>
                            <div className="table-body">Falt White</div>
                        </div>
                        <div>
                            <div className="table-head">Non-coffee</div>
                            <div className="table-body">Chai Latte</div>
                            <div className="table-body">Chocolate</div>
                            <div className="table-body">Matcha Latte</div>
                            <div className="table-body">Fresh Juice</div>
                            <div className="table-body">Lamonade</div>
                            <div className="table-body">Sparkling</div>
                        </div>
                        <div>
                            <div className="table-head">Tea</div>
                            <div className="table-body">Assam</div>
                            <div className="table-body">Earl Grey</div>
                            <div className="table-body">Jasmine Green</div>
                            <div className="table-body">Peppermint</div>
                        </div>
                    </div>

                    <MeunTitle title="Pour over" subtitle="Single origin hand drip coffee" />
                    <div className="container meun-table">
                        <div>
                            <div className="table-body wide">Ethiopia Guji D-Minor Natural</div>
                            <div className="table-body wide">Ethiopia Sidama Bensa Washed G1 74158</div>
                            <div className="table-body wide">Colombia Cauca Finca El Paraiso Double Anaerobic Flor Lichi</div>
                            <div className="table-body wide">Costa Rica Brunca Rivense Tres Piedras Black Honey</div>
                            <div className="table-body wide">Brazil Sun De Minas Sao Jose Anaerobic-Cima</div>
                            <div className="table-body wide">Brazil Sun De Minas Sao Jose Anaerobic-Cima Brazil Sun De Minas Sao Jose Anaerobic-Cima Brazil Sun De Minas Sao Jose Anaerobic-Cima</div>

                        </div>
                    </div>

                    <MeunTitle title="Food" subtitle="Food subtitle" />
                    <div className="container meun-table">
                        <div>
                            <div className="table-head">Scone</div>
                        </div>
                        <div>
                            <div className="table-head">Brunch</div>
                            <div className="table-body wide">Slow cook chicken  breast w/ salad
                                <p style={{ color: "#787777" }}>there is some description of the food: IBERICO HAM TOAST + cream cheese + sourdough + pesto</p>
                            </div>
                            <div className="table-body wide">Egg Benedict w/ salmon</div>
                            <div className="table-body wide">Coconut Milk Chia Seed Bowl</div>
                            <div className="table-body wide">Smashed Avocado Toast</div>
                            <div className="table-body wide">Iberico Ham Toast</div>
                            <div className="table-body wide">Smoked Salmon Toast</div>
                        </div>
                    </div>

                </section>
            </div>
        </div>

    )

}