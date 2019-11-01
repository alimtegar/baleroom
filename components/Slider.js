import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MySlider = () => {
    let slider;
    const settings = {
        dots: false,
        infinite: true,
    };

    return (
        <div id="slider">
            <Slider ref={(c) => slider = c} {...settings}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <img src="/static/images/baleroom-background.jpg" className="position-absolute fit-height fit-lg-width" />
                </div>
            </Slider>

            <div className="position-absolute top-50 left-0 y-min-50 d-flex vw-100">
                <button className="btn btn-primary square rounded-right-2 rounded-left-0" onClick={() => slider.slickPrev()}>
                    <i className="fa fa-chevron-left x-min-1" />
                </button>
                <button className="btn btn-primary square ml-auto rounded-left-2 rounded-right-0" onClick={() => slider.slickNext()}>
                    <i className="fa fa-chevron-right x-1" />
                </button>
            </div>
        </div>
    );
};

export default MySlider;