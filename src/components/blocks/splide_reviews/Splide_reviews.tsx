import { Splide, SplideSlide } from '@splidejs/react-splide';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from '../../../assets/redux/actions'
import '@splidejs/react-splide/css';
import './splide_reviews.scss'
import { IDispatch, IProps, ISetStore, IState, ReviewItem } from 'src/models';

interface ISliderOptions {
    updateOnMove?: boolean
    type? : string
    perPage?: number
    gap?   : string
    breakpoints?: {
        [key:number]: {
            perPage?: number
            gap?   : string
        },
    },
    perMove?: number
    pagination?: boolean
    arrows?: boolean
    drag?: boolean
    speed?: number
    snap?: boolean
    wheel?: boolean
    wheelSleep?: number
    autoplay?: boolean
    interval?: number
    pauseOnHover?: boolean
    rewind?: boolean
}

const SliderReviews: React.FC = (props: IProps): JSX.Element => {
    
    const options: ISliderOptions = {
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
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        rewind: false,
    }


    return (
        <div className="reviews__container">
            <Splide options={options}>
                    {props.store.reviews.map((review: ReviewItem, index: number) => {
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


const mapStateToProps = (store: IState): {store: IState}  => ({store: store})



const mapDispatchToProps = (dispatch: IDispatch): {setStore: ISetStore} => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(SliderReviews);