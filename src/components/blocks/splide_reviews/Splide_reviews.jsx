import { Splide, SplideSlide } from '@splidejs/react-splide';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from '../../../assets/redux/actions'
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
                    {props.store.reviews.map((review, index) => {
                        return (
                            <SplideSlide key={index}>
                            <div className="splide__slide-container">
                                <div className="review__slide">
                                    <p>{review.text}</p>
                                </div>
                                <span>{review.name}</span>
                                <span>{review.add}</span>
                            </div>
                        </SplideSlide>
                        )
                    })}
            </Splide>
        </div>
    )
}


const mapStateToProps = (store) => ({store: store})

const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SliderReviews);