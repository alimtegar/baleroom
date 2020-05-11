import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/* Components */
import Head from '../../components/Head';
import Loader from '../../components/Loader';
import Navbar from '../../components/Navbar';
import SubNavbar from '../../components/SubNavbar';
import Room from '../../components/Rooms/Room';
import Footer from '../../components/Footer';

/* Helpers */
import { fixUrl } from '../../helpers';

const MyRoom = () => {
    /* States */
    const [company, setCompany] = useState({});
    const [logo, setLogo] = useState({});
    const [navbarNav, setNavbarNav] = useState([]);
    const [room, setRoom] = useState({});
    const [roomImages, setRoomImages] = useState({});
    const [footerNav, setFooterNav] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();
    const { uniqueUrlSlug } = router.query;

    useEffect(() => {
        if (uniqueUrlSlug) {
            Promise.all([
                fetch(process.env.API_URL + 'items/profile'),
                fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=top&sort=order'),
                fetch(process.env.API_URL + 'items/rooms?filter[status]=published&filter[unique_url_slug]=' + uniqueUrlSlug),
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
                    const _room = data3.data[0];

                    setCompany(_company);
                    setNavbarNav(data2.data);
                    setRoom(_room);
                    setFooterNav(data4.data);

                    // Fetch Logo and Room Images
                    Promise.all([
                        fetch(process.env.API_URL + 'files/' + _company.logo),
                        fetch(process.env.API_URL + 'items/room_images?filter[rooms_id]=' + _room.id)
                    ])
                        .then(async ([res1, res2]) => {
                            const data1 = await res1.json();
                            const data2 = await res2.json();

                            return [data1, data2];
                        })
                        .then(([data1, data2]) => {
                            const _roomImages = data2.data;
                            let __roomImages = [];

                            _roomImages.map((_roomImage, i) => {
                                const __roomImage = {
                                    id: _roomImage.id,
                                    title: _room.title + ' ' + (i + 1),
                                    image: _roomImage.directus_files_id,
                                };

                                __roomImages.push(__roomImage);
                            });

                            setLogo(data1);
                            setRoomImages(__roomImages);

                            setIsLoading(false);
                        })
                        .catch((err) => console.log(err));
                }).catch((err) => {
                    console.log(err);
                });
        }
    }, [uniqueUrlSlug]);

    return (
        <Fragment>
            <Head />

            {isLoading ? (<Loader />) : (
                <Fragment>
                    <Head subTitle={room.title} />
                    <div className="sticky-top">
                        <SubNavbar address={company.address} email={company.email} phone={company.phone} />
                        <Navbar logo={logo} title={company.title} nav={navbarNav} />
                    </div>

                    <main id="main">
                        <Room room={room} roomImages={roomImages} />
                    </main>

                    <Footer title={company.title} email={company.email} nav={footerNav} socialMedias={company.social_medias}/>
                </Fragment>
            )}
        </Fragment>
    );
};

export default MyRoom;
