import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Head from 'next/head';

// Import Components
import { BackgroundLoader } from '../Loaders';
import SliderItem from './SliderItem';

const MySlider = ({ sliderImages, className }) => {
    let slider;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
    };

    return (
        <div id="slider" className={`position-relative overflow-hidden ${className}`}>
            <Head>
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>

            {sliderImages.length ? (
                <Slider ref={(c) => slider = c} {...settings}>
                    {sliderImages.map((sliderImage) => (<SliderItem sliderImage={sliderImage} key={sliderImage.id} />))}
                </Slider>
            ) : (<BackgroundLoader />)}


            {sliderImages.length ? (
                <div className="slider-arrow position-absolute top-50 left-0 y-50 d-none d-lg-flex w-100 px-4">
                    <button className="btn btn-outline-light square rounded-right-2 shadow-sm" onClick={() => slider.slickPrev()}>
                        <i className="fa fa-chevron-left x-min-1-y-1" />
                    </button>
                    <button className="btn btn-outline-light square ml-auto rounded-left-2 shadow-sm" onClick={() => slider.slickNext()}>
                        <i className="fa fa-chevron-right xy-1" />
                    </button>
                </div>
            ) : null}
        </div>
    );
};

MySlider.propTypes = {
    sliderImages: PropTypes.array.isRequired,
    className: PropTypes.string,
};

export default MySlider;