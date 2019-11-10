import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Facilities from '../components/Facilities';
import Footer from '../components/Footer';

const MyFacilities = () => {
    const pageTitle = 'Facilities';

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
                <Facilities />
            </main>

            <Footer />
        </div>
    );
};

export default MyFacilities;
