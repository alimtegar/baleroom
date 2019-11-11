import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Facilities from '../components/Facilities';
import Footer from '../components/Footer';

const MyFacilities = () => {
    const pageTitle = 'Facilities';
    const facilities = [
        {
            id: 2,
            icon: 'info-circle',
            title: 'General',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
            subFacilities: [
                'Air Conditioner',
                'Outdoor pool',
                'Free Wifi',
                'Room Service',
                'Non-smoking Rooms',
                'Convenience Store',
                'Elevator',
                'Free Shuttle Bus to Summarecon Mall Bekasi',
            ],
        },
        {
            id: 2,
            icon: 'map-signs',
            title: 'Nearby Facilities',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
            subFacilities: [
	            'Convenience Store',
	            'ATM',
	            'Mall',
	            'Mosque',
	            'Hospital ',
	            'Food Culinary (night)',
	            'Toll Enterance Access',

            ],
        },
        {
            id: 2,
            icon: 'map-signs',
            title: 'Popular Facilities',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
            subFacilities: [
                'Outdoor pool',
                'Free Wifi',
                '24 hrs front desk',
                'Room Service',
            ],
        },
        {
            id: 1,
            icon: 'swimming-pool',
            title: 'Outdoor Pool',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
            subFacilities: [
                'Swimming pool',
                'Pool with view',
                'Waterslide'
            ],
        },
        
        {
            id: 3,
            icon: 'parking',
            title: '24 Hrs Front Desk',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
            subFacilities: [
                'Private parking IDR 30000 a day',
            ],
        },
        {
            id: 4,
            icon: 'dog',
            title: 'Pets',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
            subFacilities: [
                'Pets are not allowed'
            ],
        },
    ];

    return (
        <div>
            <Head title={`Baleroom | ${pageTitle}`} />

            <div className="sticky-top">
                <SubNavbar />
                <Navbar />
            </div>

            <main id="main">
                <section className="py-5">
                    <div className="container">
                        <div className="facilities-header text-center mb-5 px-3">
                            <h1 className="h2 mb-3">
                                Our Facilities
                            </h1>
                            <hr className="divider border-dark mb-3" />
                            <p className="text-muted small mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="row m-min-2">
                            {facilities.map((facility) => (
                                <div className="col-lg-6 p-2">
                                    <div className="p-3 border-2 h-100">
                                        <div className="d-flex align-items-center mb-3">
                                            <div>
                                                <div className="item-icon circle circle bg-primary text-white">
                                                    <i className={`fa fa-${facility.icon}`} />
                                                </div>
                                            </div>
                                            <div className="ml-3">
                                                <h2 className="h5 mb-1">
                                                    {facility.title}
                                                </h2>
                                                <p className="x-small text-muted mb-0">
                                                    {facility.description}
                                                </p>
                                            </div>
                                        </div>
                                        <ul className="nav flex-column text-muted">
                                            {facility.subFacilities.map((subFacility, key) => (
                                                <li className={`nav-item py-3 px-2 ${key + 1 < facility.subFacilities.length ? 'border-bottom' : ''}`}>
                                                    <div className="d-table">
                                                        <dic className="d-table-cell small pr-3">
                                                            {key + 1}
                                                        </dic>
                                                        <h3 className="d-table-cell small mb-0">
                                                            
                                                            {subFacility}
                                                        </h3>
                                                    </div>
                                                    
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MyFacilities;
