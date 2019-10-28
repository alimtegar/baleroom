const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-white shadow-sm">
            <div className="container">
                <a href="#" className="navbar-brand position-absolute bg-dark px-5 py-4 rounded-bottom shadow-sm">
                    <img src="/static/images/baleroom-logo.png" alt="Baleroom Logo" height="18" className="y-1"/>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fa fa-bars" />
                </button>

                <ul className="navbar-nav ml-auto mr-min-3">
                    <li className="nav-item">
                        <a href="#" className="nav-link active">
                            <i className="fa fa-home mr-2"/>
                            B E R A N D A
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fa fa-concierge-bell mr-2"/>
                            F A S I L I T A S
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fa fa-bed mr-2"/>
                            K A M A R
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fa fa-images mr-2"/>
                            G A L E R I
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fa fa-phone mr-2"/>
                            K O N T A K
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;