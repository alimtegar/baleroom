import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/* Components */
import Head from '../components/Head';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const MyRoom = () => {
    /* States */
    const [company, setCompany] = useState({});
    const [logo, setLogo] = useState({});
    const [navbarNav, setNavbarNav] = useState([]);
    const [page, setPage] = useState({});
    const [footerNav, setFooterNav] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();
    const { uniqueUrlSlug } = router.query;

    useEffect(() => {
        if (uniqueUrlSlug) {
            Promise.all([
                fetch(process.env.API_URL + 'items/profile'),
                fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=top&sort=order'),
                fetch(process.env.API_URL + 'items/pages?filter[status]=published&filter[unique_url_slug]=' + uniqueUrlSlug),
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
                    const _page = data3.data[0];

                    setCompany(_company);
                    setNavbarNav(data2.data);
                    setPage(_page);
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
        }
    }, [uniqueUrlSlug]);

    return (
        <Fragment>
            <Head />

            {isLoading ? (<Loader />) : (
                <Fragment>
                    <Head subTitle={page.title} />
                    <div className="sticky-top">
                        <SubNavbar address={company.address} email={company.email} phone={company.phone} />
                        <Navbar logo={logo} title={company.title} nav={navbarNav} />
                    </div>

                    <main id="main">
                        <section className="py-5">
                            <div className="container">
                                <div className="facilities-header text-center mb-5 px-3">
                                    <h1 className="h4 mb-3">
                                        {page.title}
                                    </h1>
                                    <hr className="divider border-dark" />
                                </div>
                                <div className="row m-min-2">
                                    <div className="small text-muted text-justify mb-0" dangerouslySetInnerHTML={{ __html: page.content }} />
                                </div>
                            </div>
                        </section>
                    </main>

                    <Footer title={company.title} email={company.email} nav={footerNav} socialMedias={company.social_medias} pageUrlSlug={uniqueUrlSlug} />
                </Fragment>
            )}
        </Fragment>
    );
};

export default MyRoom;
