import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Import Components
import { BackgroundLoader } from '../Loaders';

// Import Helpers
import { isObjectEmpty } from '../../helpers';

const SliderItem = ({ sliderImage }) => {
    const apiUrl = process.env.API_URL;

    // Use State
    const [sliderItemImage, setSliderItemImage] = useState({});

    // Use Effect
    useEffect(() => {
        fetch(apiUrl + 'files/' + sliderImage.image)
            .then((res) => res.json())
            .then((image) => {
                setSliderItemImage(image);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="position-relative d-flex justify-content-center align-items-center h-100 overflow-hidden" key={sliderImage.id}>
            {!isObjectEmpty(sliderItemImage) ? (
                <img
                    src={apiUrl + 'assets/' + sliderItemImage.data.private_hash + '?w=1440&h=1440&q=80&f=contain'}
                    className="position-absolute fit-height fit-sm-width"
                    alt={sliderImage.title}
                />
            ) : (<BackgroundLoader />)}
        </div>
    );
};

SliderItem.propTypes = {
    sliderImage: PropTypes.object.isRequired,
};

export default SliderItem;