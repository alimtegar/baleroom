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
            title: 'Facilities',
            link: '/facilities',
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
        <nav id="navbar" className="navbar navbar-expand-lg bg-white shadow-sm">
            <div className="container">
                <a href="#" className="navbar-brand position-absolute top-0 bg-dark mr-0 px-5 py-4 shadow-sm">
                    <img src="/static/images/baleroom-logo.png" alt="Baleroom Logo" height="18" className="y-1"/>
                </a>

                <ul className="navbar-nav ml-0 ml-lg-auto">
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
            </div>
        </nav>
    );
};

export default Navbar;
