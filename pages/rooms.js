import { useState, useEffect } from 'react';

/* Components */
import Head from '../components/Head';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Rooms from '../components/rooms/Rooms';
import Footer from '../components/Footer';

/* Helpers */
import { fixUrl } from '../helpers';

const MyRooms = () => {
    /* States */
    const [company, setCompany] = useState({});
    const [navbarNav, setNavbarNav] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [footerNav, setFooterNav] = useState([]);
    const [socialMedia, setSocialMedia] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const pageTitle = 'Rooms';

    useEffect(() => {
        Promise.all([
            fetch(process.env.ADMIN_URL + '/companies?_limit=1'),
            fetch(process.env.ADMIN_URL + '/links?position_eq=top'),
            fetch(process.env.ADMIN_URL + '/rooms?_limit=3'),
            fetch(process.env.ADMIN_URL + '/links?position_eq=bottom'),
            fetch(process.env.ADMIN_URL + '/socialmedias'),
        ])
            .then(async ([res1, res2, res3, res4, res5]) => {
                const data1 = await res1.json();
                const data2 = await res2.json();
                const data3 = await res3.json();
                const data4 = await res4.json();
                const data5 = await res5.json();

                return [data1, data2, data3, data4, data5];
            })
            .then(([data1, data2, data3, data4, data5]) => {
                setCompany(data1[0]);
                setNavbarNav(data2);
                setRooms(data3);
                setFooterNav(data4);
                setSocialMedia(data5);
                setIsLoading(false);
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
                        <SubNavbar company={company} />
                        <Navbar company={company} nav={navbarNav} />
                    </div>

                    <main id="main">
                        <Rooms rooms={rooms} showFooter={false} />
                    </main>

                    <Footer company={company} nav={footerNav} socialMedia={socialMedia} />
                </div>
            )}
        </div>
    );
};

export default MyRooms;
