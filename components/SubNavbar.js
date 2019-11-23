import PropTypes from 'prop-types';

const SubNavbar = ({company}) => {
    return (
        <div id="sub-navbar" className="navbar navbar-expand-lg z-1 d-none d-lg-block bg-dark text-white x-small py-2">
            <div className="container">
                <div className="mr-auto" />
                <div className="mx-min-3">
                    <div className="navbar-text px-3 py-0">
                        <i className="fa fa-map-marker-alt mr-2" />
                        {company.address}
                    </div> 
                    <div className="navbar-text px-3 py-0">
                        <i className="fa fa-envelope mr-2" />
                        {company.email}
                    </div>
                    <div className="navbar-text px-3 py-0">
                        <i className="fa fa-phone mr-2" />
                        {company.phone}
                    </div>
                </div>
            </div>
        </div>
    );
};

SubNavbar.propTypes = {
    company: PropTypes.object.isRequired,
};

export default SubNavbar;
