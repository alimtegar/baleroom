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

            <main id="main">
                <Rooms showFooter={false} />
            </main>

            <Footer />
        </div>
    );
};

export default MyRooms;
