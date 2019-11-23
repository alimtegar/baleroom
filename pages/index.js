import { useState, useEffect } from 'react';

/* Components */
import Head from '../components/Head';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Slider from '../components/Slider';
import AboutUs from '../components/AboutUs';
import Amenities from '../components/Amenities';
import Rooms from '../components/rooms/Rooms';
import Location from '../components/Location';
import Footer from '../components/Footer';

/* Helpers */
import { fixUrl } from '../helpers';

const Home = () => {
    /* States */
    const [company, setCompany] = useState({});
    const [navbarNav, setNavbarNav] = useState([]);
    const [sliderImages, setSliderImages] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [footerNav, setFooterNav] = useState([]);
    const [socialMedia, setSocialMedia] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const adminUrl = process.env.ADMIN_URL ? fixUrl(process.env.ADMIN_URL) : 'https://example.com';
    const pageTitle = 'Rooms';

    useEffect(() => {
        Promise.all([
            fetch(adminUrl + '/companies?_limit=1'),
            fetch(adminUrl + '/links?position_eq=top'),
            fetch(adminUrl + '/sliderimages'),
            fetch(adminUrl + '/popularamenities?_limit=4'),
            fetch(adminUrl + '/rooms?_limit=3'),
            fetch(adminUrl + '/links?position_eq=bottom'),
            fetch(adminUrl + '/socialmedias'),
        ])
            .then(async ([res1, res2, res3, res4, res5, res6, res7]) => {
                const data1 = await res1.json();
                const data2 = await res2.json();
                const data3 = await res3.json();
                const data4 = await res4.json();
                const data5 = await res5.json();
                const data6 = await res6.json();
                const data7 = await res7.json();

                return [data1, data2, data3, data4, data5, data6, data7];
            })
            .then(([data1, data2, data3, data4, data5, data6, data7]) => {
                setCompany(data1[0]);
                setNavbarNav(data2);
                setSliderImages(data3);
                setAmenities(data4);
                setRooms(data5);
                setFooterNav(data6);
                setSocialMedia(data7);
                setIsLoading(false);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Head />

            {isLoading ? (<Loader />) : (
                <div>
                    <div className="sticky-top">
                        <SubNavbar company={company} />
                        <Navbar adminUrl={adminUrl} company={company} nav={navbarNav} />
                    </div>

                    <main id="main">
                        <Slider adminUrl={adminUrl} sliderImages={sliderImages} />
                        <AboutUs company={company} />
                        <Amenities adminUrl={adminUrl} amenities={amenities} />
                        <Rooms adminUrl={adminUrl} rooms={rooms} />
                        <Location />
                    </main>

                    <Footer
                        company={company}
                        nav={footerNav}
                        socialMedia={socialMedia}
                    />
                </div>
            )}
        </div>
    );
};

export default Home;
