import { useState, useEffect } from 'react';

/* Components */
import Head from '../components/Head';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Slider from '../components/Slider';
import AboutUs from '../components/AboutUs';
import Amenities from '../components/Amenities';
import Rooms from '../components/Rooms';
import Map from '../components/Map';
import Footer from '../components/Footer';

const Home = () => {
    /* States */
    const [company, setCompany] = useState({});
    const [logo, setLogo] = useState({});
    const [navbarNav, setNavbarNav] = useState([]);
    const [sliderImages, setSliderImages] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [footerNav, setFooterNav] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            fetch(process.env.API_URL + 'items/profile'),
            fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=top&sort=order'),
            fetch(process.env.API_URL + 'items/slider?filter[status]=published&sort=order'),
            fetch(process.env.API_URL + 'items/main_amenities?filter[status]=published&sort=order&limit=4'),
            fetch(process.env.API_URL + 'items/rooms?filter[status]=published&sort=order&limit=3'),
            fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=bottom&sort=order'),
        ])
            .then(async ([res1, res2, res3, res4, res5, res6]) => {
                const data1 = await res1.json();
                const data2 = await res2.json();
                const data3 = await res3.json();
                const data4 = await res4.json();
                const data5 = await res5.json();
                const data6 = await res6.json();

                return [data1, data2, data3, data4, data5, data6];
            })
            .then(([data1, data2, data3, data4, data5, data6]) => {
                const _company = data1.data[0];

                setCompany(_company);
                setNavbarNav(data2.data);                
                setSliderImages(data3.data);
                setAmenities(data4.data);
                setRooms(data5.data);
                setFooterNav(data6.data);

                // Fetch Logo
                fetch(process.env.API_URL + 'files/' + _company.logo)
                    .then((res) => res.json())
                    .then((logo) => {
                        setLogo(logo);
                        setIsLoading(false);
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div id="home">
            <Head />

            {isLoading ? (<Loader />) : (
                <div>
                    <div className="sticky-top">
                        <SubNavbar address={company.address} email={company.email} phone={company.phone} />
                        <Navbar logo={logo} title={company.title} nav={navbarNav} />
                    </div>

                    <main id="main">
                        <Slider sliderImages={sliderImages} />
                        <AboutUs title={company.title} content={company.content} />
                        <Amenities amenities={amenities} />
                        <Rooms rooms={rooms} />
                        <Map className="pt-5" />
                    </main>

                    <Footer title={company.title} nav={footerNav} socialMedias={company.social_medias}/>
                </div>
            )}
        </div>
    );
};

export default Home;
