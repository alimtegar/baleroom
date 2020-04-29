import PropTypes from 'prop-types';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getMeta } from '../helpers';

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
            <Slider ref={(c) => slider = c} {...settings}>
                {sliderImages.map((sliderImage) => (
                    <div className="position-relative d-flex justify-content-center align-items-center h-100 overflow-hidden" key={sliderImage.id}>
                        <img src={process.env.ADMIN_URL + sliderImage.image.url} className="position-absolute fit-height fit-lg-width" alt={sliderImage.title} />
                    </div>
                ))}
            </Slider>

            {sliderImages.length > 1 ? (
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