import React from 'react';
import './Home.scss';
import hero from '../assets/images/Home/hero.jpg';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import IGapi from '../IGapi/IGapi';


export default function Home (){

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());





    return(
        <div className='home'>
            <section className='hero row'>
                <h1>
                    Coffee &<br />
                    Roastery
                </h1>

                <p className='col-3'> 
                    Established by and for coffee connoisseurs, 
                    we use direct-roasting method to fully extract the distinct flavour profiles unique to their origins into your cup.<br />
                    <a href='#'>FIND US</a>
                </p>
                    <div className="col-8 offset-4 img-container">
                        <img src={hero} alt="hero"/>
                    </div>
            </section>

            <section className='story row'>
                <h2>From 0 to 1</h2>
                <div className='offset-2 col-8 border-top pt-4'>

                    <p>
                        We are simply a group of young people from Hong Kong, Taiwan, and China who were brought together by the same passion for coffee. Taking the first step is always the hardest, but we let our butterflies moved us forward and led us to new opportunities.
                        <br />
                        <br />
                        Zero One Coffee & Roastery (with a ∞ sign in between) not only represent our infinitive passion for coffee, but also our story. We want to open our own coffee shop and let Hong Kong to try quality specialty coffee with distinct flavor profiles unique to their origins and appreciate the beauty of this centuries-old beverage. 
                    </p>
                </div>
            </section>

            <section className='coffee row'>
                <div className="pattern"></div>
                <div className="pattern"></div>
            <div className="col-3 img-container">
                    <img src={hero} alt="hero"/>
            </div>
            <div className='col-6 my-auto'>
                <h2>
                    Direct<br />
                    <span>Roasting</span><br />
                    Distinct<br />
                    <span>Unique</span>
                </h2>
            </div>
            <div className="col-3 img-container">
               
                    <img src={hero} alt="hero"/>
                </div>

            </section>


            <section className='awards row'>
                <div className="col-8">
                    <h2>
                        EVERY SIP <br />
                        IS THE TASTE <br />
                        OF <span>AWARDS</span>
                    </h2>
                    <p>
                        Did you know every cup of coffee is an award-winning one at Zero One? <br />
                        Our “One” Espresso House Blend won a bronze medal at the 2019 Australian International Coffee Awards, you will be surprised when it’s topped with frothed milk. <br />
                        <a href="#">Make your own award coffee</a>
                    </p>
                </div>
                <div className="col-4 img-container">
                    <img src={hero} alt="" />
                </div>
            </section>
            
            <section className='ig'>
                <h2>Latest Feeds</h2>
                <div className='row feeds-slide'>
                    <div className="img-container">
                    <IGapi />
                    </div>
                    <div className="img-container">
                        <img src={hero} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={hero} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={hero} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={hero} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={hero} alt="" />
                    </div>
                </div>
                <div>
                    <p>Connect with us</p>
                </div>
            </section>

            

            <footer>
                
            </footer>

        </div>

    )

}