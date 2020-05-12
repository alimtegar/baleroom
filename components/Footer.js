import { Fragment } from 'react';
import Link from './Link';
import PropTypes from 'prop-types';

// Import Helpers
import { isObjectEmpty, range } from '../helpers';

// Import Components
import { TextLoader, SquareLoader } from './Loaders';

const Footer = ({ email, nav, socialMedias, pageUrlSlug }) => {
    return (
        <footer id="footer" className="bg-dark">
            <div className="container">
                <div className="footer-panel d-flex flex-column flex-lg-row justify-content-center align-items-center py-5 py-lg-2">
                    <ul className="footer-nav nav flex-column flex-lg-row align-items-center mr-0 mr-lg-auto ml-lg-0 mb-3 mb-lg-0">
                        {nav.length ? nav.map((navItem) => (
                            <li className="nav-item" key={navItem.id}>
                                <Link href={navItem.url} activeClassName="active" pageUrlSlug={pageUrlSlug}>
                                    <a className="nav-link">
                                        {navItem.title}
                                    </a>
                                </Link>
                            </li>
                        )) : range(0, 3).map((key) => (
                            <li className="nav-item" key={key}>
                                <span className="nav-link">
                                    <TextLoader height={18} width={78} backgroundColor="#2c3034" foregroundColor="#32363a" />
                                </span>
                            </li>
                        ))}
                    </ul>
                    <ul className="footer-social-media nav m-min-1">
                        {!isObjectEmpty(socialMedias) ? (
                            <Fragment>
                                {Object.entries(socialMedias).map((socialMedia) => {
                                    const title = socialMedia[0];
                                    const username = socialMedia[1];
                                    let icon;
                                    let url;

                                    switch (title.toLowerCase()) {
                                        case 'facebook':
                                            icon = 'facebook-f';
                                            url = 'https://facebook.com/' + username;
                                            break;
                                        case 'twitter':
                                            icon = 'twitter';
                                            url = 'https://twitter.com/' + username;
                                            break;
                                        case 'instagram':
                                            icon = 'instagram';
                                            url = 'https://instagram.com/' + username;
                                            break;
                                        case 'youtube':
                                            icon = 'youtube';
                                            url = 'https://youtube.com/' + username;
                                            break;
                                        case 'pinterest':
                                            icon = 'pinterest';
                                            url = 'https://pinterest.com/' + username;
                                            break;
                                        case 'whatsapp':
                                            icon = 'whatsapp';
                                            url = 'https://wa.me/' + username;
                                            break;
                                    }

                                    return (
                                        <li className="nav-item" key={Math.random()}>
                                            <a href={url} className={`nav-link ${title.toLowerCase()}`} target="_blank" rel="noopener noreferrer" aria-label={title}>
                                                <i className={`fab fa-${icon}`} />
                                            </a>
                                        </li>
                                    );
                                })}
                                <li className="nav-item">
                                    <a href={"mailto://" + email} className="nav-link email" target="_blank" rel="noopener noreferrer" aria-label="Email">
                                        <i className="far fa-envelope" />
                                    </a>
                                </li>
                            </Fragment>
                        ) : range(0, 3).map((key) => (
                            <li className="nav-item" key={key}>
                                <span className="m-1">
                                    <SquareLoader side={43} backgroundColor="#2c3034" foregroundColor="#32363a" />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <div className="footer-copyright text-white x-small text-center py-3">
                    <p className="x-small mb-0">
                        &copy; <Link href="/"><a>{process.env.APP_NAME}</a></Link> {new Date().getFullYear()}
                        <span className="text-muted mx-3">|</span>

                        Developed by <a href={process.env.DEVELOPER_URL} target="_blank" rel="noreferrer noopener">{process.env.DEVELOPER_NAME}</a>
                    </p>
                </div>
            </div >
        </footer >
    );
};

Footer.propTypes = {
    email: PropTypes.string.isRequired,
    nav: PropTypes.array.isRequired,
    socialMedias: PropTypes.object.isRequired,
    pageUrlSlug: PropTypes.string,
};

Footer.defaultProps = {
    pageUrlSlug: '',
}

export default Footer;