import PropTypes from 'prop-types';

// Import Components
import AmenitiesItemIcon from './AmenitiesItemIcon';

const AmenitiesItem = ({ icon, title, description }) => {
    return (
        <div className="amenities-item position-relative d-flex d-lg-block align-items-center bg-white text-body mb-min-4 px-4 px-lg-3 py-4 py-lg-5 text-left text-lg-center border-bottom-2 shadow-sm">
            <div className="position-absolute top-0 left-50 xy-min-50 mr-3 mr-lg-0">
                <AmenitiesItemIcon title={title} icon={icon} />
            </div>
            <div>
                <h3 className="x-small font-weight-normal text-muted mb-1">{description}</h3>
                <h2 className="h6 mb-0 mb-lg-min-2">{title}</h2>
            </div>
        </div>
    );
};

AmenitiesItem.propTypes = {
    icon: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default AmenitiesItem;