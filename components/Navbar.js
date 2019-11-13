import Link from './Link';

const Navbar = () => {
    const nav = [
        {
            id: 1,
            title: 'Home',
            link: '/',
        },
        {
            id: 2,
            title: 'Amenities',
            link: '/amenitites',
        },
        {
            id: 3,
            title: 'Rooms',
            link: '/rooms',
        },
        {
            id: 4,
            title: 'Access & Attractions',
            link: '/access-and-attractions',
        },
    ];

    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-white shadow-sm pb-0 pb-lg-2">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand position-absolute top-0 d-flex justify-content-center align-items-center bg-dark mr-0 shadow-sm">
                        <img src="/static/images/baleroom-logo-sm.png" alt="Baleroom Logo" height="16" className="y-1" />
                    </a>
                </Link>

                {/* <button className="navbar-toggler btn btn-primary mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars mr-2" />
                    MENU
                </button> */}

                {/* <div className="collapse navbar-collapse" id="navbar-supported-content"> */}
                    <ul className="navbar-nav flex-row ml-0 ml-lg-auto">
                        {nav.map((navItem) => (
                            <li className="nav-item" key={navItem.id}>
                                <Link href={navItem.link} activeClassName="active">
                                    <a className="nav-link">
                                        {navItem.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                {/* </div> */}
            </div>
        </nav>
    );
};

export default Navbar;
