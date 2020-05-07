import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Import Components
import { CircleLoader } from '../Loaders';

// Import Helpers
import { isObjectEmpty } from '../../helpers';

const AmenitiesItemIcon = ({ icon, title }) => {
    const apiUrl = process.env.API_URL;

    // Use State
    const [amenitiesItemIcon, setAmenitiesItemIcon] = useState({});

    // Use Effect
    useEffect(() => {
        fetch(apiUrl + 'files/' + icon)
            .then((res) => res.json())
            .then((icon) => {
                setAmenitiesItemIcon(icon);
            })
            .catch((err) => console.log(err));
    }, []);

    return !isObjectEmpty(amenitiesItemIcon) ? (
        <div className="item-icon circle circle-lg bg-primary text-white shadow-sm">
            <img
                src={amenitiesItemIcon.data.data.thumbnails[0].url}
                alt={title}
                height={24}
            />
        </div>
    ) : (
        <div className="circle circle-lg shadow-sm">
            <CircleLoader diameter={60} />
        </div>
    );
};

AmenitiesItemIcon.propTypes = {
    icon: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default AmenitiesItemIcon;