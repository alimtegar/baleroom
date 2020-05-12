import { useState, useEffect } from 'react';

/* Components */
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Slider from '../components/Slider';
import AboutUs from '../components/AboutUs';
import Amenities from '../components/Amenities';
import Rooms from '../components/Rooms';
import Map from '../components/Map';
import Footer from '../components/Footer';

const Home = () => {
    /* Use State */
    const [company, setCompany] = useState({
        logo: 0,
        title: '',
        social_medias: {},
    });
    const [navbarNav, setNavbarNav] = useState([]);
    const [sliderImages, setSliderImages] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [footerNav, setFooterNav] = useState([]);

    // Use Effect
    useEffect(() => {
        // Fetch Profile
        fetch(process.env.API_URL + 'items/profile')
            .then((res) => res.json())
            .then((data) => setCompany(data.data[0]))
            .catch((err) => console.log(err));

        // Fetch Menu (Top)
        fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=top&sort=order')
            .then((res) => res.json())
            .then((data) => setNavbarNav(data.data))
            .catch((err) => console.log(err));

        // Fetch Slider
        fetch(process.env.API_URL + 'items/slider?filter[status]=published&sort=order')
            .then((res) => res.json())
            .then((data) => setSliderImages(data.data))
            .catch((err) => console.log(err));

        // Fetch Main Amenities
        fetch(process.env.API_URL + 'items/main_amenities?filter[status]=published&sort=order&limit=4')
            .then((res) => res.json())
            .then((data) => setAmenities(data.data))
            .catch((err) => console.log(err));

        // Fetch Rooms
        fetch(process.env.API_URL + 'items/rooms?filter[status]=published&sort=order&limit=3')
            .then((res) => res.json())
            .then((data) => setRooms(data.data))
            .catch((err) => console.log(err));

        // Fetch Menu (Bottom)
        fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=bottom&sort=order')
            .then((res) => res.json())
            .then((data) => setFooterNav(data.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div id="home">
            <Head />

            <div className="sticky-top">
                {console.log('company', company)}
                <SubNavbar address={company.address} email={company.email} phone={company.phone} />
                <Navbar logo={company.logo} nav={navbarNav} />
            </div>

            <main id="main">
                <Slider sliderImages={sliderImages} />
                <AboutUs content={company.content} />
                <Amenities amenities={amenities} />
                <Rooms rooms={rooms} />
                <Map className="pt-5" />
            </main>

            <Footer email={company.email} nav={footerNav} socialMedias={company.social_medias} />

        </div>
    );
};

export default Home;
