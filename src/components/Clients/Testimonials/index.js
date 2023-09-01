/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 24/06/2021 - 01:32:41
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { Component } from 'react';
// import dynamic from 'next/dynamic';
import PartnerSlider from '../Slider';
import
Title from "../../Titles/h2";
import "./testimonials.comp.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//     faQuoteLeft
// } from '@fortawesome/pro-thin-svg-icons'




// const OwlCarousel = dynamic(import('react-owl-carousel3'));
import OwlCarousel from 'react-owl-carousel';

const options = {
    loop:true,
    nav:false,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    center: false,
    dots: false,
    smartSpeed:1500,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
}





class Testimonials extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){
        this._isMounted = true;
        this.setState({ display: true })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
<>
<div className="testimonials-area">
  <Title title="Who We Work With" subtitle="The Greatest Folks Ever" body="This is who we work with." />
                    {this.state.display ? <OwlCarousel
                    className="client-wrap owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-client"><div className="quotes">
                        {/* <FontAwesomeIcon className="flex-shrink-0 w-20 h-20 pl-3 mt-2 ml-6" icon={faQuoteLeft} /> */}
                        </div>
                            <p>In an insanely short time, you conceptualized and delivered upon an idea 100x better than we had brought to the table. You even saw opportunity we had entirely overlooked.</p>

                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                <h3>Scott Z., CEO</h3>
                                <div className="italic roboto text-tiny text-gray">from a B2B and business-to-government fulfillment group</div>
                            </div>
                        </div>

                        <div className="single-client">
                        <div className="quotes">
                        {/* <FontAwesomeIcon className="flex-shrink-0 w-20 h-20 pl-3 mt-2 ml-6" icon={faQuoteLeft} /> */}
                        </div>                            <p>For eight years, we haven't been able to boil down our offering and make it palatable. In a highly complex industry and business, you did just that.</p>

                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                <h3>Dr. Sandy F., SVP</h3>
                                <div className="italic roboto text-tiny text-gray">from a B2B and B2G biotechnolgy and research institute</div>
                            </div>
                        </div>

                        <div className="single-client">
                        <div className="quotes">
                        {/* <FontAwesomeIcon className="flex-shrink-0 w-20 h-20 pl-3 mt-2 ml-6" icon={faQuoteLeft} /> */}
                        </div>                            <p>Your strategy put meat and merit on the bone! I am so pumped full of ideas.</p>

                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                <h3>Dr. Jay Stevens</h3>
                                <div className="italic roboto text-tiny text-gray">from a B2B and B2C medical provider franchisor</div>
                            </div>
                        </div>

                       </OwlCarousel> : ''}
                       </div>    </>
        );
    }
}

export default Testimonials;
