import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Location from '../components/Location';
import Footer from '../components/Footer';

const AccessAndAttractions = () => {
    const pageTitle = 'Access & Attractions';

    return (
        <div>
            <Head title={`Baleroom | ${pageTitle}`} />

            <div className="sticky-top">
                <SubNavbar />
                <Navbar />
            </div>

            {/* <Breadcrumb 
                pageTitle={pageTitle}
            /> */}

            <main id="main">
                <div className="rooms-header text-center my-5 px-3">
                    <h1 className="h2 mb-3">
                        Location
                    </h1>
                    <hr className="divider border-dark mb-3" />
                </div>

                <Location />

                <section className="small text-muted mb-min-3 py-5">
                    <div className="container">
                        <p>
                            Apartment kami dikelilingi beberapa Mall besar seperti Giant Mega Bekasi, MM, Grand Metropolitan Mall, Bekasi Cyber Park, Revo Town, Summarecon dan Trans Snow world.
                        </p>
                        <p>
                            Lokasi strategis sangat dekat dengan akses transportasi Stasiun Bekasi, LRT, Pintu Tol Bekasi Barat dan Timur.
                        </p>
                        <p>
                            Apartemen kami juga dekat dengan beberapa masjid, minimarket, restoran, dan kuliner makanan saat malam hari.
                        </p>
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AccessAndAttractions;
