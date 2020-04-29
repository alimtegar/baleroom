import Link from './Link';

const Footer = ({ company, nav, socialMedia }) => {
    return (
        <footer id="footer" className="bg-dark">
            <div className="container">
                <div className="footer-panel d-flex flex-column flex-lg-row justify-content-center align-items-center py-3 py-lg-2">
                    <ul className="footer-nav nav flex-column flex-lg-row align-items-center mr-0 mr-lg-auto ml-min-3 ml-lg-0 mb-3 mb-lg-0">
                        {nav.map((navItem) => (
                            <li className="nav-item" key={navItem.id}>
                                <a href={navItem.link} className="nav-link">
                                    {navItem.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="footer-social-media nav m-min-1">
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
                        &copy; <Link href="/"><a>{company.title}</a></Link> 2019
                        <span className="text-muted mx-3">|</span>

                        Developed by <a href="https://alter.web.id" target="_blank" rel="noopener">Alterweb</a>
                    </p>
                </div>
            </div >
        </footer >
    );
};

export default Footer;