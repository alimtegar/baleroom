import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Rooms = () => {
    let slider;
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
    };

    return (
        <section id="rooms" className="text-center py-5">
            <div className="rooms-header mb-5">
                <h1 className="h5 font-weight-bold mb-2">
                    <i className="fa fa-bed text-secondary mr-2 y-min-1"/>Kamar
                </h1>
                <p className="small text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="position-relative">
                <div className="rooms-body">
                    <div className="container h-100">
                        <Slider ref={(c) => slider = c} {...settings}>
                            <div className="h-100 px-0 px-lg-3">
                                <div className="rooms-items position-relative d-flex justify-content-center align-items-center h-100 rounded-2 overflow-hidden">
                                    <img src="/static/images/baleroom-background.jpg" className="position-absolute h-100" />
                                </div>
                            </div>
                            <div className="h-100 px-0 px-lg-3">
                                <div className="rooms-items position-relative d-flex justify-content-center align-items-center h-100 rounded-2 overflow-hidden">
                                    <img src="/static/images/baleroom-background.jpg" className="position-absolute h-100" />
                                </div>
                            </div>
                            <div className="h-100 px-0 px-lg-3">
                                <div className="rooms-items position-relative d-flex justify-content-center align-items-center h-100 rounded-2 overflow-hidden">
                                    <img src="/static/images/baleroom-background.jpg" className="position-absolute h-100" />
                                </div>
                            </div>
                            <div className="h-100 px-0 px-lg-3">
                                <div className="rooms-items position-relative d-flex justify-content-center align-items-center h-100 rounded-2 overflow-hidden">
                                    <img src="/static/images/baleroom-background.jpg" className="position-absolute h-100" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="position-absolute top-50 left-0 y-50 d-flex vw-100">
                        <button className="btn btn-primary square rounded-right-2 rounded-left-0" onClick={() => slider.slickPrev()}>
                            <i className="fa fa-chevron-left x-min-1" />
                        </button>
                        <button className="btn btn-primary square ml-auto rounded-left-2 rounded-right-0" onClick={() => slider.slickNext()}>
                            <i className="fa fa-chevron-right x-1" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="rooms-footer mt-5">
                <button className="btn btn-primary shadow-sm">
                    Lihat Semua<i className="fa fa-arrow-right ml-2" />
                </button>
            </div>
        </section>
    );
};

export default Rooms;