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
                    <p className="text-muted small mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <Location />
            </main>

            <Footer />
        </div>
    );
};

export default AccessAndAttractions;
