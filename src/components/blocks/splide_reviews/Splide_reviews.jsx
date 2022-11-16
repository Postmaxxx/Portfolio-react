import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './splide_reviews.scss'


const SliderReviews = (props) => {

    return (
        <div className="reviews__container">
            <Splide options={ {
                updateOnMove: true,
                type : 'loop',
                perPage: 2,
                gap   : '2rem',
                breakpoints: {
                    768: {
                        perPage: 1,
                        gap   : '2rem',
                    },
                },
                perMove: 1,
                pagination: false,
                arrows: false,
                drag: true,
                speed: 500,
                snap: false,
                wheel: true,
                wheelSleep: 500,
                //wheelMinThreshold: 50,
                autoplay: true,
                interval: 5000,
                pauseOnHover: true,
                rewind: false,
                } }>
                <SplideSlide>
                    <div className="splide__slide-container">
                        <div className="review__slide">
                            <p>1 Lorem ipsum dolor sit amet  </p>
                        </div>
                        <span>Mike Tyson</span>
                        <span>Client</span>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="splide__slide-container">
                        <div className="review__slide">
                            <p>2  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saeppsum dolor  porro assumenda reprehenderit in laudantium laboriosam ducimus iure laborum cupiditate consectetur? </p>
                        </div>
                        <span>Mike Tyson</span>
                        <span>Client</span>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="splide__slide-container">
                        <div className="review__slide">
                            <p>3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.dfsg dg  fdg dfsg   </p>
                        </div>
                        <span>Mike Tyson</span>
                        <span>Client</span>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="splide__slide-container">
                        <div className="review__slide">
                            <p>4 Lorem ipsum dolor sit amet consectetur adipisiciet aperiam? Pe itaque explicabo molestiae. Tenetur sapiente eum quis maiores aspernatur ratione minima?  </p>
                        </div>
                        <span>Mike Tyson</span>
                        <span>Client</span>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default SliderReviews;