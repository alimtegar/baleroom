import PropTypes from 'prop-types';

// Import Components
import { BackgroundLoader } from '../Loaders';

const RoomsItem = ({ col }) => (
    <div className={`col-lg-${col} p-0-25`}>
        <div className="rooms-item">
            <div className="item-img position-relative d-flex h-100 overflow-hidden">
                <BackgroundLoader />
            </div>
        </div>
    </div>
);

RoomsItem.propTypes = {
    col: PropTypes.number.isRequired,
};

export default RoomsItem;
