import { useState, useEffect } from 'react';

/* Components */
import Head from '../components/Head';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Map from '../components/Map';
import Footer from '../components/Footer';

const AccessAndAttractions = () => {
    /* States */
    const [company, setCompany] = useState({});
    const [logo, setLogo] = useState({});
    const [navbarNav, setNavbarNav] = useState([]);
    const [footerNav, setFooterNav] = useState([]);
    const [socialMedia, setSocialMedia] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const pageTitle = 'Access & Attractions';

    useEffect(() => {
        Promise.all([
            // fetch(process.env.ADMIN_URL + '/companies?_limit=1'),
            // fetch(process.env.ADMIN_URL + '/links?position_eq=top'),
            // fetch(process.env.ADMIN_URL + '/links?position_eq=bottom'),
            // fetch(process.env.ADMIN_URL + '/socialmedias'),

            fetch(process.env.API_URL + 'items/profile'),
            fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=top&sort=order'),
            fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=bottom&sort=order'),
        ])
            .then(async ([res1, res2, res3]) => {
                const data1 = await res1.json();
                const data2 = await res2.json();
                const data3 = await res3.json();

                return [data1, data2, data3];
            })
            .then(([data1, data2, data3]) => {
                const _company = data1.data[0];

                setCompany(_company);
                setNavbarNav(data2.data);
                setFooterNav(data3.data);

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

                    <Footer title={company.title} nav={footerNav} socialMedias={company.social_medias} />
                </div>
            )}
        </div>
    );
};

export default AccessAndAttractions;
