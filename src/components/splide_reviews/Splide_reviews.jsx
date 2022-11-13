import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './splide_reviews.scss';
/*
                    <div className="review__slide">
                        <p>1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam optio voluptate qui dolorum distinctio quo consectetur fugiat aliquam architecto?</p>
                    </div>
                */
const SliderReviews = (props) => {
    return (
        <div className="reviews__container">
            <Splide options={ {
                updateOnMove: true,
                type : 'loop',
                perPage: 2,
                perMove: 1,
                pagination: false,
                arrows: false,
                drag: true,
                speed: 500,
                snap: false,
                //autoplay: true,
                //interval: 2000,
                pauseOnHover: true,
                rewind: false,
                //lazyLoad: true,
                wheel: true,
                //gap   : '3rem',
                } }>
                <SplideSlide>
                    <div className="review__slide">
                        <p>1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam optio voluptate </p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="review__slide">
                        <p>2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam optio voluptate </p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="review__slide">
                        <p>3 Lorem ate qui dolorum distinctio quo consectetur fugiat aliquam architecto?</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="review__splide">
                        <p>4 adipisicing elit. Vero magnam optio voluptate qui dolorum distinctio quo consectetur fugiat aliquam architecto?</p>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default SliderReviews;