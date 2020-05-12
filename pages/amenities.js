import { Fragment, useState, useEffect } from 'react';

/* Import Components */
import { TextLoader, CircleLoader } from '../components/Loaders';
import Head from '../components/Head';
// import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';
import AmenitiesItemIconImage from '../components/Amenities/AmenitiesItemIconImage';

// Import Helpers
import { range } from '../helpers';

const MyAmenities = () => {
    // Use State
    const [company, setCompany] = useState({
        logo: 0,
        title: '',
        social_medias: {},
    });
    const [navbarNav, setNavbarNav] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [footerNav, setFooterNav] = useState([]);
    const pageTitle = 'Amenities';

    // Use Effect
    useEffect(() => {
        // Fetch Profile
        fetch(process.env.API_URL + 'items/profile')
            .then((res) => res.json())
            .then((data) => setCompany(data.data[0]))
            .catch((err) => console.log(err));

        // Fetch Menu (Top)
        fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=top&sort=order')
            .then((res) => res.json())
            .then((data) => setNavbarNav(data.data))
            .catch((err) => console.log(err));

        // Fetch Amenities
        fetch(process.env.API_URL + 'items/amenities?filter[status]=published&sort=order')
            .then((res) => res.json())
            .then((data) => setAmenities(data.data))
            .catch((err) => console.log(err));

        // Fetch Menu (Bottom)
        fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=bottom&sort=order')
            .then((res) => res.json())
            .then((data) => setFooterNav(data.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Fragment>
            <Head subTitle={pageTitle} />

            <div className="sticky-top">
                <SubNavbar address={company.address} email={company.email} phone={company.phone} />
                <Navbar logo={company.logo} nav={navbarNav} />
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
                            {amenities.length ? amenities.map((amenity, key) => (
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
                            )) : range(0, 6).map((key) => (
                                <div className="col-lg-6 p-2" key={key}>
                                    <div className="p-4 border-bottom-2 h-100 shadow-sm">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="circle circle-lg shadow-sm">
                                                <CircleLoader diameter={60} />
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="small text-muted font-weight-normal mb-1" style={{ height: 15, }}><TextLoader height={16} width={56} /></h3>
                                                <h2 className="h6 mb-1" style={{ height: 19, }}><TextLoader height={18} width={109} /></h2>
                                            </div>
                                        </div>
                                        <ul className="nav text-muted flex-column">
                                            {range(0, 7).map((key) => (
                                                <li className={`nav-item py-2 px-1 ${key + 1 < 7 ? 'border-bottom' : ''}`} key={key}>
                                                    <div style={{ height: 16, }}>
                                                        <h3 className="d-table small mb-0">
                                                            <div className="d-table-cell">
                                                                <i className="far fa-check-circle fa-sm text-success mr-2"></i>
                                                            </div>
                                                            <div className="d-table-cell">
                                                                <TextLoader height={16} width={150} />
                                                            </div>
                                                        </h3>
                                                    </div>
                                                </li>
                                            ))}
                                            {/* {amenity.ban_list && amenity.ban_list.map((listItem, key) => (
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
                                            ))} */}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer email={company.email} nav={footerNav} socialMedias={company.social_medias} />
        </Fragment>
    );
};

export default MyAmenities;