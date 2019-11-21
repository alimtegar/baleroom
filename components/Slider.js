import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Skeleton from './Skeleton';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* Helpers */
import { fixUrl } from '../helpers';

const MySlider = () => {
    const [sliderImages, setSliderImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const adminUrl = process.env.ADMIN_URL ? fixUrl(process.env.ADMIN_URL) : 'https://example.com';

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

    useEffect(() => {
        fetch(adminUrl + '/sliderimages')
            .then((res) => res.json())
            .then((data) => {
                setSliderImages(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <div id="slider">
            <Slider ref={(c) => slider = c} {...settings}>
                {isLoading ? (
                    <div className="position-relative d-flex justify-content-center align-items-center h-100 overflow-hidden">
                        <Skeleton className="rounded-0" width={1440} height={640} />
                    </div>
                ) : sliderImages.map((sliderImage) => (
                    <div className="position-relative d-flex justify-content-center align-items-center h-100 overflow-hidden" key={sliderImage.id}>
                        <img src={adminUrl + sliderImage.image.url} className="position-absolute fit-height fit-lg-width" alt={sliderImage.title} />
                    </div>
                ))}
            </Slider>

            {sliderImages.length > 1 ? (
                <div className="slider-arrow position-absolute top-50 left-0 y-min-50 d-none d-lg-flex w-100 px-4">
                    <button className="btn btn-primary square rounded-right-2 shadow-sm" onClick={() => slider.slickPrev()}>
                        <i className="fa fa-chevron-left x-min-1-y-1" />
                    </button>
                    <button className="btn btn-primary square ml-auto rounded-left-2 shadow-sm" onClick={() => slider.slickNext()}>
                        <i className="fa fa-chevron-right xy-1" />
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default MySlider;