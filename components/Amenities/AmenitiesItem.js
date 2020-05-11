import PropTypes from 'prop-types';

// Import Components
import AmenitiesItemIcon from './AmenitiesItemIcon';
import AmenitiesItemIconImage from './AmenitiesItemIconImage';

const AmenitiesItem = ({ icon, title, description, secondary }) => {
    return (
        <div className={`amenities-item position-relative bg-white text-body mb-min-4 px-4 px-lg-3 shadow-sm ${secondary ? 'amenities-item-secondary' : 'amenities-item-primary'}`}>
            <div className="amenities-icon-container">
                {isNaN(icon) ? (<AmenitiesItemIcon icon={icon} />) : (<AmenitiesItemIconImage title={title} icon={icon} />)}
            </div>
            <div>
                <h3 className="x-small font-weight-normal text-muted mb-1">{description}</h3>
                <h2 className="h6 mb-0 mb-lg-min-2">{title}</h2>
            </div>
        </div>
    );
};

AmenitiesItem.propTypes = {
    icon: PropTypes.any.isRequired,
    title: PropTypes.any.isRequired,
    description: PropTypes.string.isRequired,
    secondary: PropTypes.bool.isRequired,
};

AmenitiesItem.defaultProps = {
    secondary: false,
};

export default AmenitiesItem;
