import { useState, useEffect } from 'react';
import Link from './Link';
import PropTypes from 'prop-types';

// Improt Helpers
import { isObjectEmpty, range } from '../helpers';

// Import Components
import { TextLoader } from './Loaders';

const Navbar = ({ logo, nav }) => {
    // Use State
    const [logoImage, setLogoImage] = useState({});

    // Use Effect
    useEffect(() => {
        // Fetch Logo
        if (logo) {
            fetch(process.env.API_URL + 'files/' + logo)
                .then((res) => res.json())
                .then((image) => setLogoImage(image))
                .catch((err) => console.log(err));
        }
    }, [logo]);

    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-white shadow-sm pb-0 pb-lg-2">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand position-absolute top-0 d-flex justify-content-center align-items-center bg-dark mr-0 shadow-sm">
                        {!isObjectEmpty(logoImage) ? (
                            <img src={logoImage.data.data.full_url} alt={process.env.APP_NAME} height="16" className="y-1" />
                        ) : (
                            <TextLoader height={17} width={210.5} backgroundColor="#2c3034" foregroundColor="#32363a" />
                        )}
                    </a>
                </Link>

                <ul className="navbar-nav flex-row mx-min-3 ml-lg-auto mr-lg-0 px-3 p-lg-0">
                    {nav.length ? nav.map((navItem) => (
                        <li className="nav-item" key={navItem.id}>
                            <Link href={navItem.url} activeClassName="active">
                                <a className="nav-link">
                                    {navItem.title}
                                </a>
                            </Link>
                        </li>
                    )) : range(0, 4).map((key) => (
                        <li className="nav-item" key={key}>
                            <span className="nav-link">
                                <TextLoader height={18} width={78} />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    logo: PropTypes.number.isRequired,
    nav: PropTypes.array.isRequired,
};

export default Navbar;
