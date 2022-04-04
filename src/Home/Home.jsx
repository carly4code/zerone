import React from 'react';
import './Home.scss';
import hero from '../assets/images/Home/hero.jpg';
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import IGapi from '../IGapi/IGapi';
import { Fade, Rotate, Bounce, Slide, Roll } from 'react-reveal';

export default function Home (){

//     const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Move(), Sticky());





    return(
        <div className='home'>
            <section className='hero row'>
                <Fade left>
                    <h1>
                        Coffee &<br />
                        Roastery
                    </h1>
                </Fade>

                <Rotate bottom left>
                    <p className='col-3'> 
                        Established by and for coffee connoisseurs, 
                        we use direct-roasting method to fully extract the distinct flavour profiles unique to their origins into your cup.<br />
                        <a href='#'>FIND US</a>
                    </p>
                </Rotate>

                    <div className="col-8 offset-4 img-container">
                        <img src={hero} alt="hero"/>
                    </div>
            </section>

            <section className='story row'>
                <Bounce top>
                    <h2>From 0 to 1</h2>
                </Bounce>

                <div className='offset-2 col-8 border-top pt-4'>
                    <Bounce left>
                    <p>
                        We are simply a group of young people from Hong Kong, Taiwan, and China who were brought together by the same passion for coffee. Taking the first step is always the hardest, but we let our butterflies moved us forward and led us to new opportunities.
                        <br />
                        <br />
                        Zero One Coffee & Roastery (with a&nbsp;
                        <svg width="31" height="15" viewBox="0 0 31 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.0897 14.3697C21.1457 14.3 19.2813 13.5812 17.7946 12.3282C16.9831 11.7349 16.2152 11.0845 15.4966 10.3818C15.2212 10.1068 15.0518 10.0962 14.7659 10.3818C13.757 11.3759 12.65 12.2655 11.4617 13.0369C10.0386 14.054 8.30116 14.5355 6.55683 14.3961C4.8125 14.2567 3.17376 13.5054 1.93064 12.2753C1.04619 11.4186 0.430164 10.3236 0.157532 9.1235C-0.115099 7.92343 -0.0325687 6.67007 0.395073 5.516C0.757627 4.33784 1.44781 3.28681 2.38525 2.48529C3.32269 1.68377 4.4688 1.16475 5.69013 0.988668C8.25294 0.491508 10.3921 1.47525 12.3725 2.95615C13.2165 3.56917 14.0163 4.24076 14.7659 4.96595C15.02 5.19867 15.1577 5.19867 15.4119 4.96595C16.4422 3.96316 17.5624 3.05672 18.7583 2.25801C20.1004 1.28688 21.732 0.798035 23.3875 0.87102C25.0431 0.944004 26.6253 1.57453 27.8764 2.65997C28.8705 3.49184 29.586 4.60764 29.9268 5.85751C30.2675 7.10738 30.2172 8.43147 29.7826 9.65196C29.4297 10.8731 28.7259 11.9639 27.7583 12.7893C26.7908 13.6148 25.602 14.1385 24.3393 14.2956C24.1205 14.338 23.8981 14.3697 23.6721 14.3908C23.4778 14.3933 23.2834 14.3863 23.0897 14.3697ZM7.20452 4.3207C6.70857 4.27857 6.20944 4.34677 5.74304 4.5204C5.27665 4.69402 4.85458 4.96876 4.50721 5.32483C4.15984 5.6809 3.89581 6.10945 3.73412 6.57965C3.57243 7.04985 3.5171 7.55 3.57211 8.04412C3.66826 8.57423 3.88451 9.07536 4.20433 9.50918C4.52415 9.943 4.93905 10.298 5.41732 10.5471C5.89559 10.7961 6.42455 10.9327 6.96374 10.9462C7.50294 10.9597 8.0381 10.8499 8.52828 10.6251C9.94927 9.92659 11.2418 8.99317 12.3513 7.86429C12.5843 7.65274 12.4678 7.53638 12.3513 7.37771C11.5471 6.60565 10.6831 5.89826 9.76732 5.26213C9.02664 4.72131 8.15071 4.39551 7.23629 4.3207H7.20452ZM26.6056 7.7162C26.6026 7.14004 26.4546 6.57388 26.1753 6.06975C25.896 5.56562 25.4943 5.13969 25.0072 4.83111C24.5201 4.52253 23.9631 4.34119 23.3875 4.30376C22.8119 4.26632 22.236 4.37399 21.713 4.61688C20.2735 5.32355 18.966 6.27168 17.8476 7.42002C17.6781 7.56811 17.6464 7.68447 17.8476 7.85371C18.9725 8.99359 20.2832 9.93431 21.7236 10.6357C22.234 10.8779 22.7962 10.9909 23.3607 10.9646C23.9252 10.9384 24.4745 10.7737 24.9601 10.4852C25.4458 10.1966 25.8528 9.79308 26.1454 9.31016C26.4379 8.82724 26.6069 8.27981 26.6374 7.7162H26.6056Z" fill="#CC2840"/>
                        </svg>
                        &nbsp;sign in between) not only represent our infinitive passion for coffee, but also our story. We want to open our own coffee shop and let Hong Kong to try quality specialty coffee with distinct flavor profiles unique to their origins and appreciate the beauty of this centuries-old beverage. 
                    </p>
                    </Bounce>
                </div>
            </section>

            <section className='coffee row'>
                <div className="pattern"></div>
                <div className="pattern"></div>
            <div className="col-3 img-container">
                    <img src={hero} alt="hero"/>
            </div>
            <div className='col-6 my-auto'>
                <Slide bottom cascade>
                    <div>
                        <h2>
                            Direct<br />
                            <span>Roasting</span><br />
                            Distinct<br />
                            <span>Unique</span>
                        </h2>
                    </div>
                </Slide>
            </div>
                    
            <div className="col-3 img-container">
                        <img src={hero} alt="hero"/>
                </div>

            </section>


            <section className='awards row'>
                <div className="col-8">
                    <Fade left cascade>
                        <div>
                            <h2>EVERY SIP</h2>
                            <h2>IS THE TASTE </h2>
                            <h2>OF <span>AWARDS</span></h2>
                        </div>
                    </Fade>
                    <Fade left>
                        <p>
                            Did you know every cup of coffee is an award-winning one at Zero One? <br />
                            Our “One” Espresso House Blend won a bronze medal at the 2019 Australian International Coffee Awards, you will be surprised when it’s topped with frothed milk. <br />
                            <a href="#">Brew your own cup of awarded</a>
                        </p>
                    </Fade>
                </div>
                <div className="col-4 img-container">
                    <Roll right>
                        <img src={hero} alt="" />
                    </Roll>
                </div>
            </section>
            
            <section className='ig'>
                <h2>Latest Feeds</h2>
                {/* insta-feeds */}
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

                <div className='links'>
                    <p>Connect with us</p>
                    <svg width="10" height="20" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.24818 10V5.44595H4.72901L4.94912 3.66289H3.24818V2.52716C3.24818 2.01263 3.38635 1.66035 4.09812 1.66035H5V0.0706607C4.56118 0.0218702 4.1201 -0.00168805 3.67877 9.3996e-05C2.36986 9.3996e-05 1.47119 0.829113 1.47119 2.35102V3.65956H0V5.44262H1.4744V10H3.24818Z" fill="black"/>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.99866 2.43452C3.57897 2.43452 2.43322 3.58029 2.43322 5C2.43322 6.41971 3.57897 7.56548 4.99866 7.56548C6.41834 7.56548 7.56409 6.41971 7.56409 5C7.56409 3.58029 6.41834 2.43452 4.99866 2.43452ZM4.99866 6.66738C4.08055 6.66738 3.33131 5.91812 3.33131 5C3.33131 4.08188 4.08055 3.33262 4.99866 3.33262C5.91676 3.33262 6.666 4.08188 6.666 5C6.666 5.91812 5.91676 6.66738 4.99866 6.66738ZM7.66916 1.73154C7.33769 1.73154 7.07002 1.99922 7.07002 2.3307C7.07002 2.66217 7.33769 2.92985 7.66916 2.92985C8.00063 2.92985 8.2683 2.66342 8.2683 2.3307C8.2684 2.25199 8.25297 2.17403 8.2229 2.10129C8.19282 2.02856 8.14869 1.96247 8.09304 1.90681C8.03738 1.85115 7.9713 1.80702 7.89856 1.77695C7.82582 1.74687 7.74787 1.73144 7.66916 1.73154ZM9.99944 5C9.99944 4.30953 10.0057 3.62532 9.96692 2.93611C9.92815 2.13556 9.74553 1.42508 9.16014 0.839689C8.57351 0.253043 7.86429 0.0716702 7.06376 0.032894C6.37331 -0.00588219 5.68911 0.000372057 4.99991 0.000372057C4.30945 0.000372057 3.62525 -0.00588219 2.93605 0.032894C2.13552 0.0716702 1.42506 0.254294 0.839674 0.839689C0.253038 1.42634 0.0716689 2.13556 0.0328934 2.93611C-0.00588208 3.62657 0.00037205 4.31078 0.00037205 5C0.00037205 5.68922 -0.00588208 6.37468 0.0328934 7.06389C0.0716689 7.86444 0.254289 8.57491 0.839674 9.16031C1.42631 9.74696 2.13552 9.92833 2.93605 9.96711C3.6265 10.0059 4.3107 9.99963 4.99991 9.99963C5.69036 9.99963 6.37456 10.0059 7.06376 9.96711C7.86429 9.92833 8.57476 9.74571 9.16014 9.16031C9.74678 8.57366 9.92815 7.86444 9.96692 7.06389C10.0069 6.37468 9.99944 5.69047 9.99944 5ZM8.89872 7.94949C8.80741 8.17715 8.69734 8.34726 8.52097 8.52238C8.3446 8.69875 8.17574 8.80882 7.94809 8.90014C7.29016 9.16156 5.72788 9.10277 4.99866 9.10277C4.26943 9.10277 2.7059 9.16156 2.04797 8.90139C1.82032 8.81007 1.65021 8.7 1.47509 8.52363C1.29873 8.34726 1.18865 8.1784 1.09734 7.95074C0.837172 7.29155 0.895961 5.72924 0.895961 5C0.895961 4.27076 0.837172 2.7072 1.09734 2.04926C1.18865 1.8216 1.29873 1.65149 1.47509 1.47637C1.65146 1.30125 1.82032 1.18993 2.04797 1.09861C2.7059 0.838438 4.26943 0.897228 4.99866 0.897228C5.72788 0.897228 7.29141 0.838438 7.94935 1.09861C8.17699 1.18993 8.34711 1.3 8.52222 1.47637C8.69859 1.65274 8.80866 1.8216 8.89997 2.04926C9.16014 2.7072 9.10135 4.27076 9.10135 5C9.10135 5.72924 9.16014 7.29155 8.89872 7.94949Z" fill="black"/>
                    </svg>

                </div>
            </section>

            

            <footer>
                
            </footer>

        </div>

    )

}