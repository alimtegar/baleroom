import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Slider from '../components/Slider';
import AboutUs from '../components/AboutUs';
import Facilities from '../components/Facilities';
import Rooms from '../components/Rooms';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Head />

            <div className="sticky-top">
                <SubNavbar />
                <Navbar />
            </div>

            <main id="main">
                <Slider />
                <AboutUs />
                <Facilities />
                <Rooms />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
