
const Footer = ({ company, nav, socialMedia }) => {


    return (
        <footer id="footer" className="bg-dark">
            <div className="container">
                <div className="footer-panel d-flex align-items-start align-items-lg-center py-2">
                    <ul className="footer-nav nav flex-column flex-lg-row mr-auto ml-min-3 ml-lg-0">
                        {nav.map((navItem) => (
                            <li className="nav-item" key={navItem.id}>
                                <a href={navItem.link} className="nav-link">
                                    {navItem.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="footer-social-media nav flex-column flex-lg-row m-min-1">
                        {socialMedia.map((socialMediaItem) => (
                            <li className="nav-item" key={socialMediaItem.id}>
                                <a href={socialMediaItem.link} className={`nav-link ${socialMediaItem.title.toLowerCase()}`} target="_blank" rel="noopener" aria-label={socialMediaItem.title}>
                                    <i className={`fab fa-${socialMediaItem.icon}`} />
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="footer-copyright text-white x-small text-center py-3">
                    <p className="x-small mb-0">
                        &copy; {company.title} 2019. All Right Reserved 
                        <span className="text-muted mx-3">|</span>
                        
                         Developed by Alterweb
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;