import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Rooms from '../components/Rooms';
import Footer from '../components/Footer';

const MyRooms = () => {
    const pageTitle = 'Rooms';

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
                <Rooms />
            </main>

            <Footer />
        </div>
    );
};

export default MyRooms;
