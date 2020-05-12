import PropTypes from 'prop-types';

// Import Components
import { TextLoader, CircleLoader } from '../Loaders';

const AmenitiesItemLoader = ({ secondary }) => (
    <div className={`amenities-item position-relative bg-white text-body mb-min-4 px-4 px-lg-3 shadow-sm ${secondary ? 'amenities-item-secondary' : 'amenities-item-primary'}`}>
        <div className="amenities-icon-container" style={{ height: 60, }}>
            <div className="circle circle-lg shadow-sm">
                <CircleLoader diameter={60} />
            </div>
        </div>
        <div>
            <h3 className="x-small font-weight-normal text-muted mb-1" style={{ height: 15, }}><TextLoader height={16} width={56} /></h3>
            <h2 className="h6 mb-0 mb-lg-min-2" style={{ height: 19, }}><TextLoader height={18} width={109} /></h2>
        </div>
    </div>
);

AmenitiesItemLoader.propTypes = {
    secondary: PropTypes.bool.isRequired,
};

AmenitiesItemLoader.defaultProps = {
    secondary: false,
};

export default AmenitiesItemLoader;
