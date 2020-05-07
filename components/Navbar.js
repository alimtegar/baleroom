import Link from './Link';
import PropTypes from 'prop-types';

const Navbar = ({ logo, title, nav }) => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-white shadow-sm pb-0 pb-lg-2">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand position-absolute top-0 d-flex justify-content-center align-items-center bg-dark mr-0 shadow-sm">
                        <img src={logo.data.data.full_url} alt={title} height="16" className="y-1" />
                    </a>
                </Link>

                <ul className="navbar-nav flex-row mx-min-3 ml-lg-auto mr-lg-0 px-3 p-lg-0">
                    {nav.map((navItem) => (
                        <li className="nav-item" key={navItem.id}>
                            <Link href={navItem.url} activeClassName="active">
                                <a className="nav-link">
                                    {navItem.title}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    logo: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    nav: PropTypes.array.isRequired,
};

export default Navbar;
