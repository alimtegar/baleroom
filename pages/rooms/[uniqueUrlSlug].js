import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/* Components */
import Head from '../../components/Head';
import Navbar from '../../components/Navbar';
import SubNavbar from '../../components/SubNavbar';
import Room from '../../components/Rooms/Room';
import Footer from '../../components/Footer';

const MyRoom = ({ company, navbarNav, room, footerNav }) => {
    /* States */
    // const [company, setCompany] = useState({
    //     logo: 0,
    //     title: '',
    //     address: '',
    //     phone: '',
    //     email: '',
    //     social_medias: {},
    // });
    // const [navbarNav, setNavbarNav] = useState([]);
    // const [room, setRoom] = useState({
    //     amenities: [],
    // });
    // const [footerNav, setFooterNav] = useState([]);

    // const router = useRouter();
    // const { uniqueUrlSlug } = router.query;

    // useEffect(() => {
    //     if (uniqueUrlSlug) {
    //         // Fetch Profile
    //         fetch(process.env.API_URL + 'items/profile')
    //             .then((res) => res.json())
    //             .then((data) => setCompany(data.data[0]))
    //             .catch((err) => console.log(err));

    //         // Fetch Menu (Top)
    //         fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=top&sort=order')
    //             .then((res) => res.json())
    //             .then((data) => setNavbarNav(data.data))
    //             .catch((err) => console.log(err));

    //         // Fetch Room
    //         fetch(process.env.API_URL + 'items/rooms?filter[status]=published&filter[unique_url_slug]=' + uniqueUrlSlug)
    //             .then((res) => res.json())
    //             .then((data) => setRoom(data.data[0]))
    //             .catch((err) => console.log(err));

    //         // Fetch Menu (Bottom)
    //         fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=bottom&sort=order')
    //             .then((res) => res.json())
    //             .then((data) => setFooterNav(data.data))
    //             .catch((err) => console.log(err));
    //     }
    // }, [uniqueUrlSlug]);

    return (
        <Fragment>
            <Head subTitle={room.title} />
            <div className="sticky-top">
                <SubNavbar address={company.address} email={company.email} phone={company.phone} />
                <Navbar logo={company.logo} nav={navbarNav} />
            </div>

            <main id="main">
                <Room room={room} />
            </main>

            <Footer email={company.email} nav={footerNav} socialMedias={company.social_medias} />
        </Fragment>
    );
};

export async function getStaticProps(context) {
    let uniqueUrlSlug = context.params.uniqueUrlSlug;
    let res, data;

    // Fetch Profile
    res = await fetch(process.env.API_URL + 'items/profile');
    data = await res.json();
    const company = data.data[0];

    // Fetch Menu (Top)
    res = await fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=top&sort=order');
    data = await res.json();
    const navbarNav = data.data;

    // Fetch Room
    res = await fetch(process.env.API_URL + 'items/rooms?filter[status]=published&filter[unique_url_slug]=' + uniqueUrlSlug);
    data = await res.json();
    const room = data.data[0];

    // Fetch Menu (Bottom)
    res = await fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=bottom&sort=order');
    data = await res.json();
    const footerNav = data.data;

    return {
        props: {
            company,
            navbarNav,
            room,
            footerNav,
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch(process.env.API_URL + 'items/rooms?filter[status]=published&fields=unique_url_slug');
    const data = await res.json();
    const rooms = data.data;

    const paths = rooms.map((room) => ({
        params: {
            uniqueUrlSlug: room.unique_url_slug,
        },
    }));

    return { paths, fallback: false, };
};

export default MyRoom;
