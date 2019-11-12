import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MySlider = () => {
    let slider;
    const settings = {
        dots: false,
        infinite: true,
    };

    const _slider = [
        {
            id: 1,
            title: 'Slider Item 1',
            img: 'baleroom-background.jpg',
        },
        {
            id: 2,
            title: 'Slider Item 1',
            img: 'baleroom-background.jpg',
        },
    ];

    return (
        <div id="slider">
            <Slider ref={(c) => slider = c} {...settings}>
                {_slider.map((sliderItem) => (
                    <div className="position-relative d-flex justify-content-center align-items-center h-100 overflow-hidden" key={sliderItem.id}>
                        <img src="/static/images/baleroom-background.jpg" className="position-absolute fit-height fit-lg-width" />
                    </div>
                ))}
            </Slider>

            <div className="slider-arrow position-absolute top-50 left-0 y-min-50 d-none d-lg-flex w-100 px-4">
                <button className="btn btn-primary square rounded-right-2" onClick={() => slider.slickPrev()}>
                    <i className="fa fa-chevron-left x-min-1-y-1" />
                </button>
                <button className="btn btn-primary square ml-auto rounded-left-2" onClick={() => slider.slickNext()}>
                    <i className="fa fa-chevron-right xy-1" />
                </button>
            </div>
        </div>
    );
};

export default MySlider;