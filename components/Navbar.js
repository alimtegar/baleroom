import { useState, useEffect } from 'react';
import Link from './Link';
import Skeleton from './Skeleton';

/* Helpers */
import { fixUrl } from '../helpers';

const Navbar = () => {
    const [company, setCompany] = useState({});
    const [nav, setNav] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const adminUrl = process.env.ADMIN_URL ? fixUrl(process.env.ADMIN_URL) : 'https://example.com';

    useEffect(() => {
        Promise.all([
            fetch(adminUrl + '/companies?_limit=1'),
            fetch(adminUrl + '/links?position_eq=top'),
        ])
            .then(async ([res1, res2]) => {
                const data1 = await res1.json();
                const data2 = await res2.json();
                return [data1, data2];
            })
            .then(([data1, data2]) => {
                setCompany(data1[0]);
                setNav(data2);
                setIsLoading(false);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-white shadow-sm pb-0 pb-lg-2">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand position-absolute top-0 d-flex justify-content-center align-items-center bg-dark mr-0 shadow-sm">
                        {isLoading ? (
                            <Skeleton type="dark" width={211} height={16} />
                        ) : (
                                <img src={adminUrl + company.logo.url} alt={company.title} height="16" className="y-1" />
                            )}
                    </a>
                </Link>

                {/* <button className="navbar-toggler btn btn-primary mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars mr-2" />
                    MENU
                </button> */}

                {/* <div className="collapse navbar-collapse" id="navbar-supported-content"> */}
                <ul className="navbar-nav flex-row mx-min-3 ml-lg-auto mr-lg-0 px-3 p-lg-0">
                    {isLoading ? [...Array(4).keys()].map((i) => (
                        <li className="nav-item" key={i}>
                            <div className="p-3 mb-min-1">
                                <Skeleton className="y-min-2" height={18} />
                            </div>
                        </li>
                    )) : nav.map((navItem) => (
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
