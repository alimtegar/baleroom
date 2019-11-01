const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-white shadow-sm">
            <div className="container">
                <a href="#" className="navbar-brand position-absolute bg-dark mr-0 px-5 py-4 rounded-bottom-2 shadow-sm">
                    <img src="/static/images/baleroom-logo.png" alt="Baleroom Logo" height="18" className="y-1"/>
                </a>

                <ul className="navbar-nav ml-0 ml-lg-auto mr-min-3">
                    <li className="nav-item">
                        <a href="#" className="nav-link active">
                            <i className="fa fa-home mr-2"/>
                            Beranda
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fa fa-concierge-bell mr-2"/>
                            Fasilitas
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fa fa-bed mr-2"/>
                            Kamar
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fa fa-images mr-2"/>
                            Galeri
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fa fa-phone mr-2"/>
                            Kontak
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;