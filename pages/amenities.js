import { useState, useEffect } from 'react';

/* Components */
import Head from '../components/Head';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

/* Helpers */
import { fixUrl } from '../helpers';

const MyAmenities = () => {
    /* States */
    const [company, setCompany] = useState({});
    const [navbarNav, setNavbarNav] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [footerNav, setFooterNav] = useState([]);
    const [socialMedia, setSocialMedia] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const adminUrl = process.env.ADMIN_URL ? fixUrl(process.env.ADMIN_URL) : 'https://example.com';
    const pageTitle = 'Amenities';

    useEffect(() => {
        Promise.all([
            fetch(adminUrl + '/companies?_limit=1'),
            fetch(adminUrl + '/links?position_eq=top'),
            fetch(adminUrl + '/amenities'),
            fetch(adminUrl + '/links?position_eq=bottom'),
            fetch(adminUrl + '/socialmedias'),
        ])
            .then(async ([res1, res2, res3, res4, res5]) => {
                const data1 = await res1.json();
                const data2 = await res2.json();
                const data3 = await res3.json();
                const data4 = await res4.json();
                const data5 = await res5.json();

                return [data1, data2, data3, data4, data5];
            })
            .then(([data1, data2, data3, data4, data5]) => {
                setCompany(data1[0]);
                setNavbarNav(data2);
                setAmenities(data3);
                setFooterNav(data4);
                setSocialMedia(data5);
                setIsLoading(false);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Head title={`Baleroom | ${pageTitle}`} />

            {isLoading ? (<Loader />) : (
                <div>
                    <div className="sticky-top">
                        <SubNavbar company={company} />
                        <Navbar adminUrl={adminUrl} company={company} nav={navbarNav} />
                    </div>

                    <main id="main">
                        <section className="py-5">
                            <div className="container">
                                <div className="facilities-header text-center mb-5 px-3">
                                    <h1 className="h4 mb-3">
                                        Our Facilities
                            </h1>
                                    <hr className="divider border-dark" />
                                </div>
                                <div className="row m-min-2">
                                    {amenities.map((amenity) => (
                                        <div className="col-lg-6 p-2">
                                            <div className="p-3 border border-top-2 h-100">
                                                <div className="d-flex align-items-center mb-3">
                                                    <div>
                                                        <div className="item-icon circle circle bg-primary text-white">
                                                            <i className={`fa fa-${amenity.icon}`} />
                                                        </div>
                                                    </div>
                                                    <div className="ml-3">
                                                        <h2 className="h5 mb-1">
                                                            {amenity.title}
                                                        </h2>
                                                    </div>
                                                </div>
                                                <ul className="nav text-muted flex-column">
                                                    {amenity.list.split('\n').map((listItem, key) => (
                                                        <li className={`nav-item py-3 px-1 ${key + 1 < amenity.list.split('\n').length ? 'border-bottom' : ''}`}>
                                                            <div className="d-table">
                                                                <h3 className="d-table-cell small mb-0">
                                                                    <span className="mr-3">
                                                                        <i className="fa fa-chevron-right fa-sm text-body"></i>
                                                                    </span>
                                                                    {listItem}
                                                                </h3>
                                                            </div>

                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>

                        </section>
                    </main>

                    <Footer company={company} nav={footerNav} socialMedia={socialMedia} />
                </div>
            )}
        </div>
    );
};

export default MyAmenities;
