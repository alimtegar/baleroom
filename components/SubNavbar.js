import PropTypes from 'prop-types';

const SubNavbar = ({ address, email, phone }) => (
    <div id="sub-navbar" className="navbar navbar-expand-lg z-1 d-none d-lg-block bg-dark text-white x-small py-2">
        <div className="container">
            <div className="mr-auto" />
            <div className="mx-min-3">
                <div className="navbar-text px-3 py-0">
                    <i className="fa fa-map-marker-alt mr-2" />
                    {address}
                </div>
                <div className="navbar-text px-3 py-0">
                    <i className="fa fa-envelope mr-2" />
                    {email}
                </div>
                <div className="navbar-text px-3 py-0">
                    <i className="fa fa-phone mr-2" />
                    {phone}
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
