const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <a href="#" className="navbar-brand">
                <img src="/static/images/baleroom-logo.png" alt="Baleroom Logo" height="18"/>
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

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        Beranda
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        Fasilitas
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        Kamar
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        Kontak
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;