import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Slider from '../components/Slider';
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

                <section id="about-us" className="py-5">
                    <div className="container">
                        <div className="about-us-header text-center mb-5">
                            <h1 className="h6 font-weight-bold mb-0">
                                <i className="fa fa-users text-secondary mr-2" />
                                 B A L E R O O M
                            </h1>
                        </div>
                        <div className="about-us-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="d-flex h-100">
                                        <span className="bg-dark py-4 px-5 rounded">
                                            <img src="/static/images/baleroom-logo.png" alt="" height="18" className="y-1" />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="d-flex justify-content-center flex-column h-100">
                                        <p className="small mb-0">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores error dolorem quam vitae perspiciatis ea corrupti quas quae temporibus. Dolor vitae quisquam necessitatibus a nostrum doloremque officiis! Suscipit, eaque voluptate.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Facilities />
                <Rooms />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
