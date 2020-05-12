import PropTypes from 'prop-types';

// Import Components
import { TextLoader } from './Loaders';

const SubNavbar = ({ address, email, phone }) => (
    <div id="sub-navbar" className="navbar navbar-expand-lg z-1 d-none d-lg-block bg-dark text-white x-small py-2">
        <div className="container">
            <div className="mr-auto" />
            <div className="mx-min-3">
                <div className="navbar-text px-3 py-0">
                    <i className="fa fa-map-marker-alt mr-2" />
                    {address ? address : (<TextLoader height={16} width={280} backgroundColor="#2c3034" foregroundColor="#32363a" />)}
                </div>
                <div className="navbar-text px-3 py-0">
                    <i className="fa fa-envelope mr-2" />
                    {email ? email : (<TextLoader height={16} width={133} backgroundColor="#2c3034" foregroundColor="#32363a" />)}
                </div>
                <div className="navbar-text px-3 py-0">
                    <i className="fa fa-phone mr-2" />
                    {phone ? phone : (<TextLoader height={16} width={94} backgroundColor="#2c3034" foregroundColor="#32363a" />)}
                </div>
            </div>
        </div>
    </div>
);

SubNavbar.propTypes = {
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default SubNavbar;
