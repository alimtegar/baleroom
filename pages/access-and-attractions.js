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

    const adminUrl = process.env.ADMIN_URL ? fixUrl(process.env.ADMIN_URL) : 'https://example.com';
    const pageTitle = 'Access & Attractions';

    useEffect(() => {
        Promise.all([
            fetch(adminUrl + '/companies?_limit=1'),
            fetch(adminUrl + '/links?position_eq=top'),
            fetch(adminUrl + '/links?position_eq=bottom'),
            fetch(adminUrl + '/socialmedias'),
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
                        <Navbar adminUrl={adminUrl} company={company} nav={navbarNav} />
                    </div>

                    <main id="main">
                        <Location />

                        <div className="page-header text-center my-5 px-3">
                            <h1 className="h4 mb-3">{pageTitle}</h1>
                            
                            <hr className="divider border-dark" />
                        </div>    

                        <section className="page-body small text-muted my-min-3 mb-5">
                            <div className="container">
                                <div className="my-3 p-4 border border-left-2">
                                    <p className="mb-0">Apartment kami dikelilingi beberapa Mall besar seperti Giant Mega Bekasi, MM, Grand Metropolitan Mall, Bekasi Cyber Park, Revo Town, Summarecon dan Trans Snow world.</p>
                                </div>
                                <div className="my-3 p-4 border  border-left-2">
                                    <p className="mb-0">Lokasi strategis sangat dekat dengan akses transportasi Stasiun Bekasi, LRT, Pintu Tol Bekasi Barat dan Timur.</p>
                                </div>
                                <div className="my-3 p-4 border  border-left-2">
                                    <p className="mb-0">Apartemen kami juga dekat dengan beberapa masjid, minimarket, restoran, dan kuliner makanan saat malam hari.</p>
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
