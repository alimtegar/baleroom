import Link from './Link';
import PropTypes from 'prop-types';

const Footer = ({ title, nav, socialMedias }) => {
    return (
        <footer id="footer" className="bg-dark">
            <div className="container">
                <div className="footer-panel d-flex flex-column flex-lg-row justify-content-center align-items-center py-5 py-lg-2">
                    <ul className="footer-nav nav flex-column flex-lg-row align-items-center mr-0 mr-lg-auto ml-lg-0 mb-3 mb-lg-0">
                        {nav.map((navItem) => (
                            <li className="nav-item" key={navItem.id}>
                                <a href={navItem.link} className="nav-link">
                                    {navItem.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="footer-social-media nav m-min-1">
                        {Object.entries(socialMedias).map((socialMedia) => {
                            const title = socialMedia[0];
                            let icon;

                            switch (title.toLowerCase()) {
                                case 'facebook':
                                    icon = 'facebook-f';
                                    break;
                                case 'twitter':
                                    icon = 'twitter';
                                    break;
                                case 'instagram':
                                    icon = 'instagram';
                                    break;
                                case 'youtube':
                                    icon = 'youtube';
                                    break;
                                case 'pinterest':
                                    icon = 'pinterest';
                                    break;
                                case 'whatsapp':
                                    icon = 'whatsapp';
                                    break;
                            }

                            return (
                                <li className="nav-item" key={Math.random()}>
                                    <a href={socialMedia.link} className={`nav-link ${title.toLowerCase()}`} target="_blank" rel="noopener" rel="noreferer" aria-label={title}>
                                        <i className={`fab fa-${icon}`} />
                                    </a>
                                </li>
                            );
                        })}
                        <li className="nav-item">
                            <a href="#" className="nav-link email" target="_blank" rel="noopener" rel="noreferer" aria-label="Email">
                                <i className="far fa-envelope" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="footer-copyright text-white x-small text-center py-3">
                    <p className="x-small mb-0">
                        &copy; <Link href="/"><a>{title}</a></Link> {new Date().getFullYear()}
                        <span className="text-muted mx-3">|</span>

                        Developed by <a href={process.env.DEVELOPER_URL} target="_blank" rel="noreferrer noopener">{process.env.DEVELOPER_NAME}</a>
                    </p>
                </div>
            </div >
        </footer >
    );
};

Footer.propTypes = {
    title: PropTypes.string.isRequired,
    nav: PropTypes.array.isRequired,
    socialMedias: PropTypes.object.isRequired,
};

export default Footer;