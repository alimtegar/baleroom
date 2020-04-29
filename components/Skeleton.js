import PropTypes from 'prop-types';

const Skeleton = ({ className, type, width, height }) => {
    return (
        <div className={`skeleton skeleton-${type} ${className}`} style={{width: width, height: height,}}/>
    );
};

Skeleton.propTypes = {
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

Skeleton.defaultProps = {
    className: '',
    type: 'light',
    width: 100,
    height: 50,
};

export default Skeleton;