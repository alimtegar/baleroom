import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Import Components
import { CircleLoader } from '../Loaders';

// Import Helpers
import { isObjectEmpty } from '../../helpers';

const AmenitiesItemIconImage = ({ icon, title }) => {
    const apiUrl = process.env.API_URL;

    // Use State
    const [amenitiesItemIconImage, setAmenitiesItemIconImage] = useState({});

    // Use Effect
    useEffect(() => {
        fetch(apiUrl + 'files/' + icon)
            .then((res) => res.json())
            .then((image) => {
                setAmenitiesItemIconImage(image);
            })
            .catch((err) => console.log(err));
    }, []);

    return !isObjectEmpty(amenitiesItemIconImage) ? (
        <div className="item-icon circle circle-lg bg-primary text-white shadow-sm">
            <img
                src={amenitiesItemIconImage.data.data.thumbnails[0].url}
                alt={title}
                height={22}
            />
        </div>
    ) : (
        <div className="circle circle-lg shadow-sm">
            <CircleLoader diameter={60} />
        </div>
    );
};

AmenitiesItemIconImage.propTypes = {
    icon: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default AmenitiesItemIconImage;