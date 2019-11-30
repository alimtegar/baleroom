import { useState, useEffect } from 'react';

/* Components */
import Head from '../components/Head';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Location from '../components/Location';
import Footer from '../components/Footer';

/* Helpers */
import { fixUrl } from '../helpers';

const AccessAndAttractions = () => {
    /* States */
    const [company, setCompany] = useState({});
    const [navbarNav, setNavbarNav] = useState([]);
    const [footerNav, setFooterNav] = useState([]);
    const [socialMedia, setSocialMedia] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const pageTitle = 'Access & Attractions';

    useEffect(() => {
        Promise.all([
            fetch(process.env.ADMIN_URL + '/companies?_limit=1'),
            fetch(process.env.ADMIN_URL + '/links?position_eq=top'),
            fetch(process.env.ADMIN_URL + '/links?position_eq=bottom'),
            fetch(process.env.ADMIN_URL + '/socialmedias'),
        ])
            .then(async ([res1, res2, res3, res4]) => {
                const data1 = await res1.json();
                const data2 = await res2.json();
                const data3 = await res3.json();
                const data4 = await res4.json();

                return [data1, data2, data3, data4];
            })
            .then(([data1, data2, data3, data4]) => {
                setCompany(data1[0]);
                setNavbarNav(data2);
                setFooterNav(data3);
                setSocialMedia(data4);
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
                        <Navbar company={company} nav={navbarNav} />
                    </div>

                    <main id="main">
                        <section id="page" className="page-body pb-5">
                            <Location />

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

                    <Footer company={company} nav={footerNav} socialMedia={socialMedia} />
                </div>
            )}
        </div>
    );
};

export default AccessAndAttractions;
