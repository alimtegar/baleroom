import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MySlider = () => {
    let slider;
    const settings = {
        dots: false,
    };

    return (
        <div id="slider">
            <Slider ref={(c) => slider = c} {...settings}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <img src="/static/images/baleroom-background.jpg" className="position-absolute w-100" />

                    {/* <div className="slider-body position-absolute d-flex justify-content-center align-items-center bg-mask-dark text-white h-100 w-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <h1 className="font-weight-bold">
                                        B A L E R O O M
                                    </h1>
                                    <p className="small mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odit voluptate eaque at natus quisquam mollitia eum quod assumenda officiis iste veniam, nihil in laudantium accusantium. 
                                    </p>
                                    <button className="btn btn-primary">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </Slider>

            <div className="position-absolute top-50 left-0 vw-100">
                <button className="position-absolute y-min-50 left-0 btn btn-primary square rounded-right rounded-left-0" onClick={() => slider.slickPrev()}>
                    <i className="fa fa-chevron-left x-min-1" />
                </button>
                <button className="position-absolute y-min-50 right-0 btn btn-primary square rounded-left rounded-right-0" onClick={() => slider.slickNext()}>
                    <i className="fa fa-chevron-right x-1" />
                </button>
            </div>
        </div>
    );
};

export default MySlider;