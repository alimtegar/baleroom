import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Facilities from '../components/Amenities';
import Footer from '../components/Footer';

const Amenities = () => {
    const pageTitle = 'Facilities';
    const facilities = [
        {
            id: 2,
            icon: 'info-circle',
            title: 'General',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
            subFacilities: [
                'Free Wifi',
                'Room Service',
                'Non-smoking Rooms',
                'Outdoor pool',
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
	            'Food Culinary',
	            'Toll Enterance Access',

            ],
        },
        
        
        {
            id: 3,
            icon: 'parking',
            title: 'Parking',
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
                            <hr className="divider border-dark" />
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
                                            </div>
                                        </div>
                                        <ul className="nav flex-column">
                                            {facility.subFacilities.map((subFacility, key) => (
                                                <li className={`nav-item py-2 px-1 ${key + 1 < facility.subFacilities.length ? 'border-bottom' : ''}`}>
                                                    <div className="d-table">
                                                        {/* <dic className="d-table-cell small pr-3">
                                                            {key + 1}
                                                        </dic> */}
                                                        <i className="fa fa-caret-right fa-sm mr-2" />
                                                        <h3 className="d-table-cell small font-weight-bold mb-0">
                                                            
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

export default Amenities;
