import { useState, useEffect } from 'react';

/* Components */
import Head from '../components/Head';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Rooms from '../components/rooms/Rooms';
import Footer from '../components/Footer';

const MyRooms = () => {
    /* States */
    const [company, setCompany] = useState({});
    const [logo, setLogo] = useState({});
    const [navbarNav, setNavbarNav] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [footerNav, setFooterNav] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const pageTitle = 'Rooms';

    useEffect(() => {
        Promise.all([
            // fetch(process.env.ADMIN_URL + '/companies?_limit=1'),
            // fetch(process.env.ADMIN_URL + '/links?position_eq=top'),
            // fetch(process.env.ADMIN_URL + '/rooms'),
            // fetch(process.env.ADMIN_URL + '/links?position_eq=bottom'),
            // fetch(process.env.ADMIN_URL + '/socialmedias'),

            fetch(process.env.API_URL + 'items/profile'),
            fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=top&sort=order'),
            fetch(process.env.API_URL + 'items/rooms?filter[status]=published&sort=order'),
            fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=bottom&sort=order'),
        ])
            .then(async ([res1, res2, res3, res4]) => {
                const data1 = await res1.json();
                const data2 = await res2.json();
                const data3 = await res3.json();
                const data4 = await res4.json();

                return [data1, data2, data3, data4];
            })
            .then(([data1, data2, data3, data4]) => {
                const _company = data1.data[0];

                setCompany(_company);
                setNavbarNav(data2.data);
                setRooms(data3.data);
                setFooterNav(data4.data);

                // Fetch Logo
                fetch(process.env.API_URL + 'files/' + _company.logo)
                    .then((res) => res.json())
                    .then((logo) => {
                        setLogo(logo);
                        setIsLoading(false);
                    })
                    .catch((err) => console.log(err));
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Head title={`Baleroom | ${pageTitle}`} />

            {isLoading ? (<Loader />) : (
                <div>
                    <div className="sticky-top">
                        <SubNavbar address={company.address} email={company.email} phone={company.phone} />
                        <Navbar logo={logo} title={company.title} nav={navbarNav} />
                    </div>

                    <main id="main">
                        <Rooms rooms={rooms} showFooter={false} />
                    </main>

                    <Footer title={company.title} nav={footerNav} socialMedias={company.social_medias}/>
                </div>
            )}
        </div>
    );
};

export default MyRooms;
