const Footer = () => {
    return (
        <footer id="footer">
            {/* Footer Panel */}
            <div className="footer-panel py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Footer Social Media */}
                        <div className="col-lg-3">
                            <div className="footer-social-media text-center">
                                <h2 className="h5 font-weight-bold mb-4">
                                    <i className="fa fa-at text-secondary mr-2 y-min-1"/>Ikuti Kami
                                </h2>
                                <ul className="nav justify-content-center m-min-2">
                                    <li className="nav-item">
                                        <a href="#" className="whatsapp nav-link">
                                            <i className="fab fa-whatsapp fa-lg" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="facebook nav-link">
                                            <i className="fab fa-facebook fa-lg" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="instagram nav-link">
                                            <i className="fab fa-instagram fa-lg" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="twitter nav-link">
                                            <i className="fab fa-twitter fa-lg" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Copyright */}
            <div className="footer-copyright bg-primary text-white x-small text-center py-2">
                <span className="mx-2">
                    Copyright by <strong>Baleroom</strong> 2019
                </span>
                |
                <span className="mx-2">
                    All Right Reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;