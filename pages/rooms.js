import { Fragment, useState, useEffect } from 'react';

/* Components */
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Rooms from '../components/rooms/Rooms';
import Footer from '../components/Footer';

const MyRooms = () => {
    /* Use State */
    const [company, setCompany] = useState({
        logo: 0,
        title: '',
        social_medias: {},
    });
    const [navbarNav, setNavbarNav] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [footerNav, setFooterNav] = useState([]);
    const pageTitle = 'Rooms';

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

        // Fetch Rooms
        fetch(process.env.API_URL + 'items/rooms?filter[status]=published&sort=order')
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
        <Fragment>
            <Head subTitle={pageTitle} />

            <div className="sticky-top">
                <SubNavbar address={company.address} email={company.email} phone={company.phone} />
                <Navbar logo={company.logo} nav={navbarNav} />
            </div>

            <main id="main">
                <Rooms rooms={rooms} showFooter={false} />
            </main>

            <Footer email={company.email} nav={footerNav} socialMedias={company.social_medias} />
        </Fragment>
    );
};

export default MyRooms;
