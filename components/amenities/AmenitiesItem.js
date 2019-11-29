import PropTypes from 'prop-types';

const AmenitiesItem = ({ icon, title, description }) => {
    return (
        <div className="amenities-item position-relative bg-white text-body mt-4 mb-min-4 px-3 py-5 text-center border-bottom-2 shadow-sm">
            <div className="item-icon circle circle-lg position-absolute top-0 left-50 xy-min-50 bg-primary text-white shadow-sm">
                <i className={`fa fa-${icon} fa-lg y-min-1`} />
            </div>

            <h3 className="x-small font-weight-normal text-muted mb-1">{description}</h3>
            <h2 className="h6 mb-min-2">{title}</h2>
        </div>
    );
};

AmenitiesItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default AmenitiesItem;