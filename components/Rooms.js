import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Rooms = () => {
    let slider;
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <section id="rooms" className="text-center py-5">

            <div className="rooms-header mb-5">
                <h1 className="h6 font-weight-bold mb-0">
                    <i className="fa fa-bed text-secondary mr-2" />
                    K A M A R
                    </h1>
            </div>
            <div className="position-relative">
                <div className="rooms-body">
                    <div className="container h-100">
                        <Slider ref={(c) => slider = c} {...settings}>
                            <div className="h-100 px-3">
                                <div className="rooms-items position-relative d-flex justify-content-center align-items-center h-100 rounded-2 overflow-hidden">
                                    <img src="/static/images/baleroom-background.jpg" className="position-absolute h-100" />
                                </div>
                            </div>
                            <div className="h-100 px-3">
                                <div className="rooms-items position-relative d-flex justify-content-center align-items-center h-100 rounded-2 overflow-hidden">
                                    <img src="/static/images/baleroom-background.jpg" className="position-absolute h-100" />
                                </div>
                            </div>
                            <div className="h-100 px-3">
                                <div className="rooms-items position-relative d-flex justify-content-center align-items-center h-100 rounded-2 overflow-hidden">
                                    <img src="/static/images/baleroom-background.jpg" className="position-absolute h-100" />
                                </div>
                            </div>
                            <div className="h-100 px-3">
                                <div className="rooms-items position-relative d-flex justify-content-center align-items-center h-100 rounded-2 overflow-hidden">
                                    <img src="/static/images/baleroom-background.jpg" className="position-absolute h-100" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="position-absolute top-50 left-0 vw-100">
                        <button className="position-absolute y-50 left-0 btn btn-primary square rounded-right rounded-left-0" onClick={() => slider.slickPrev()}>
                            <i className="fa fa-chevron-left x-min-1" />
                        </button>
                        <button className="position-absolute y-50 right-0 btn btn-primary square rounded-left rounded-right-0" onClick={() => slider.slickNext()}>
                            <i className="fa fa-chevron-right x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rooms;