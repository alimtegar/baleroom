import PropTypes from 'prop-types';

const AmenitiesItemIconImage = ({ icon }) => (
    <div className="item-icon circle circle-lg bg-primary text-white shadow-sm">
        <i className={"fa fa-lg y-min-1 fa-" + icon} />
    </div>
);

AmenitiesItemIconImage.propTypes = {
    icon: PropTypes.string.isRequired,
};

export default AmenitiesItemIconImage;