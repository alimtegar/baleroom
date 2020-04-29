import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/* Components */
import Head from '../../components/Head';
import Loader from '../../components/Loader';
import Navbar from '../../components/Navbar';
import SubNavbar from '../../components/SubNavbar';
import Room from '../../components/rooms/Room';
import Footer from '../../components/Footer';

/* Helpers */
import { fixUrl } from '../../helpers';

const MyRoom = () => {
    /* States */
    const [company, setCompany] = useState({});
    const [navbarNav, setNavbarNav] = useState([]);
    const [room, setRoom] = useState([]);
    const [footerNav, setFooterNav] = useState([]);
    const [socialMedia, setSocialMedia] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pageTitle, setPageTitle] = useState('Rooms');

    const adminUrl = process.env.ADMIN_URL ? fixUrl(process.env.ADMIN_URL) : 'https://example.com';
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            Promise.all([
                fetch(adminUrl + '/companies?_limit=1'),
                fetch(adminUrl + '/links?position_eq=top'),
                fetch(adminUrl + '/rooms?id=' + id),
                fetch(adminUrl + '/links?position_eq=bottom'),
                fetch(adminUrl + '/socialmedias'),
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
                    setRoom(data3[0]);
                    setPageTitle(data3[0].title)
                    setFooterNav(data4);
                    setSocialMedia(data5);
                    setIsLoading(false);
                }).catch((err) => {
                    console.log(err);
                });
        }
    }, [id]);

    return (
        <div>
            <Head title={`Baleroom | ${pageTitle}`} />

            {isLoading ? (<Loader />) : (
                <div>
                    <div className="sticky-top">
                        <SubNavbar
                            company={company}
                        />
                        <Navbar
                            adminUrl={adminUrl}
                            company={company}
                            nav={navbarNav}
                        />
                    </div>

                    <main id="main">
                        <Room
                            adminUrl={adminUrl}
                            room={room}
                        />
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

export default MyRoom;
