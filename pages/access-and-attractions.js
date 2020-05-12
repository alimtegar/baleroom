import { Fragment, useState, useEffect } from 'react';

/* Components */
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Map from '../components/Map';
import Footer from '../components/Footer';

const AccessAndAttractions = () => {
    // Use State
    const [company, setCompany] = useState({
        logo: 0,
        title: '',
        address: '',
        phone: '',
        email: '',
        social_medias: {},
    });
    const [navbarNav, setNavbarNav] = useState([]);
    const [footerNav, setFooterNav] = useState([]);
    const pageTitle = 'Access & Attractions';

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
                <section id="page" className="page-body pb-5">
                    <Map />

                    <div className="container">
                        <div className="position-relative bg-white mt-min-4 px-3 px-lg-5 py-5 border-bottom-2 shadow-sm">
                            <div className="page-header text-center mb-5">
                                <h1 className="h4 mb-3">{pageTitle}</h1>

                                <hr className="divider border-dark" />
                            </div>

                            <div className="small text-muted">
                                <blockquote>
                                    Apartment kami dikelilingi beberapa Mall besar seperti Giant Mega Bekasi, MM, Grand Metropolitan Mall, Bekasi Cyber Park, Revo Town, Summarecon dan Trans Snow world.
                                        </blockquote>
                                <blockquote>
                                    Lokasi strategis sangat dekat dengan akses transportasi Stasiun Bekasi, LRT, Pintu Tol Bekasi Barat dan Timur.
                                        </blockquote>
                                <blockquote>
                                    Apartemen kami juga dekat dengan beberapa masjid, minimarket, restoran, dan kuliner makanan saat malam hari.
                                        </blockquote>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer email={company.email} nav={footerNav} socialMedias={company.social_medias} />
        </Fragment>
    );
};

export default AccessAndAttractions;
