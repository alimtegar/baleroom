import { useState, useEffect } from 'react';

/* Components */
import Head from '../components/Head';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';
import AmenitiesItemIconImage from '../components/Amenities/AmenitiesItemIconImage';

const MyAmenities = () => {
    /* States */
    const [company, setCompany] = useState({});
    const [logo, setLogo] = useState({});
    const [navbarNav, setNavbarNav] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [footerNav, setFooterNav] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const pageTitle = 'Amenities';

    useEffect(() => {
        Promise.all([
            fetch(process.env.API_URL + 'items/profile'),
            fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=top&sort=order'),
            fetch(process.env.API_URL + 'items/amenities?filter[status]=published&sort=order'),
            fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=bottom&sort=order'),
        ])
            .then(async ([res1, res2, res3, res4]) => {
                const data1 = await res1.json();
                const data2 = await res2.json();
                const data3 = await res3.json();
                const data4 = await res4.json();

                return [data1, data2, data3, data4];
            })
            .then(([data1, data2, data3, data4]) => {
                const _company = data1.data[0];

                setCompany(_company);
                setNavbarNav(data2.data);
                setAmenities(data3.data);
                setFooterNav(data4.data);

                // Fetch Logo
                fetch(process.env.API_URL + 'files/' + _company.logo)
                    .then((res) => res.json())
                    .then((logo) => {
                        setLogo(logo);
                        setIsLoading(false);
                    })
                    .catch((err) => console.log(err));
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
                        <SubNavbar address={company.address} email={company.email} phone={company.phone} />
                        <Navbar logo={logo} title={company.title} nav={navbarNav} />
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
                                    {amenities.map((amenity, key) => (
                                        <div className="col-lg-6 p-2" key={key}>
                                            <div className="p-4 border-bottom-2 h-100 shadow-sm">
                                                <div className="d-flex align-items-center mb-3">
                                                    <AmenitiesItemIconImage title={amenity.title} icon={amenity.icon} />
                                                    <div className="ml-3">
                                                        <h3 className="small text-muted font-weight-normal mb-1">Amenity</h3>
                                                        <h2 className="h6 mb-1">
                                                            {amenity.title}
                                                        </h2>
                                                    </div>
                                                </div>
                                                <ul className="nav text-muted flex-column">
                                                    {amenity.list && amenity.list.map((listItem, key) => (
                                                        <li className={`nav-item py-2 px-1 ${key + 1 < amenity.list.length ? 'border-bottom' : ''}`} key={key}>
                                                            <div className="d-table">
                                                                <h3 className="d-table small mb-0">
                                                                    <div className="d-table-cell">
                                                                        <i className="far fa-check-circle fa-sm text-success mr-2"></i>
                                                                    </div>
                                                                    <div className="d-table-cell">
                                                                        {listItem}
                                                                    </div>
                                                                </h3>
                                                            </div>
                                                        </li>
                                                    ))}
                                                    {amenity.ban_list && amenity.ban_list.map((listItem, key) => (
                                                        <li className={`nav-item py-2 px-1 ${key + 1 < amenity.list.length ? 'border-bottom' : ''}`} key={key}>
                                                            <div className="d-table">
                                                                <h3 className="d-table small mb-0">
                                                                    <div className="d-table-cell">
                                                                        <i className="far fa-times-circle fa-sm text-danger mr-2"></i>
                                                                    </div>
                                                                    <div className="d-table-cell">
                                                                        {listItem}
                                                                    </div>
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

                    <Footer title={company.title} email={company.email} nav={footerNav} socialMedias={company.social_medias}/>
                </div>
            )}
        </div>
    );
};

export default MyAmenities;