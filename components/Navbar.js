const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-white shadow-sm">
            <div className="container">
                <a href="#" className="navbar-brand position-absolute top-0 bg-dark mr-0 px-5 py-4 shadow-sm">
                    <img src="/static/images/baleroom-logo.png" alt="Baleroom Logo" height="18" className="y-1"/>
                </a>

                <ul className="navbar-nav ml-0 ml-lg-auto mr-min-3">
                    <li className="nav-item">
                        <a href="#" className="nav-link active">
                            HOME
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            ROOMS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            ACCESS &amp; ATTRACTIONS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
