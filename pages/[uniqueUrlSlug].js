import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/* Components */
import { TextLoader, MultiLineTextLoader } from '../components/Loaders';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const MyRoom = ({ company, navbarNav, page, footerNav, uniqueUrlSlug }) => {
    // Use State
    // const [company, setCompany] = useState({
    //     logo: 0,
    //     title: '',
    //     address: '',
    //     phone: '',
    //     email: '',
    //     social_medias: {},
    // });
    // const [navbarNav, setNavbarNav] = useState([]);
    // const [page, setPage] = useState({});
    // const [footerNav, setFooterNav] = useState([]);

    // const router = useRouter();
    // const { uniqueUrlSlug } = router.query;

    // Use Effect
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

    //         // Fetch Page
    //         fetch(process.env.API_URL + 'items/pages?filter[status]=published&filter[unique_url_slug]=' + uniqueUrlSlug)
    //             .then((res) => res.json())
    //             .then((data) => setPage(data.data[0]))
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
            <Head subTitle={page.title} />

            <div className="sticky-top">
                <SubNavbar address={company.address} email={company.email} phone={company.phone} />
                <Navbar logo={company.logo} nav={navbarNav} />
            </div>

            <main id="main">
                <section className="py-5">
                    <div className="container">
                        <div className="facilities-header text-center mb-5 px-3">
                            <h1 className="h4 mb-3" style={{ height: 28, }}>
                                {page.title ? page.title : ((<TextLoader height={29} width={145} />))}
                            </h1>
                            <hr className="divider border-dark" />
                        </div>
                        {page.content ? (
                            <div className="small text-muted text-justify mb-0" dangerouslySetInnerHTML={{ __html: page.content }} />
                        ) : (
                            <div>
                                <div className="mb-3">
                                    <MultiLineTextLoader lineTotal={7} lineHeight={5.25} height={16} width="100%" align="left" />
                                </div>
                                <div className="mb-3">
                                    <MultiLineTextLoader lineTotal={5} lineHeight={5.25} height={16} width="100%" align="left" />
                                </div>
                                <div className="mb-3">
                                    <MultiLineTextLoader lineTotal={4} lineHeight={5.25} height={16} width="100%" align="left" />
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer email={company.email} nav={footerNav} socialMedias={company.social_medias} pageUrlSlug={uniqueUrlSlug} />
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

    // Fetch Page
    res = await fetch(process.env.API_URL + 'items/pages?filter[status]=published&filter[unique_url_slug]=' + uniqueUrlSlug);
    data = await res.json();
    const page = data.data[0];

    // Fetch Menu (Bottom)
    res = await fetch(process.env.API_URL + 'items/menu?filter[status]=published&filter[position]=bottom&sort=order');
    data = await res.json();
    const footerNav = data.data;

    return {
        props: {
            company,
            navbarNav,
            page,
            footerNav,
            uniqueUrlSlug,
        }
    };
};

export async function getStaticPaths() {
    const res = await fetch(process.env.API_URL + 'items/pages?filter[status]=published&fields=unique_url_slug');
    const data = await res.json();
    const pages = data.data;

    const paths = pages.map((page) => ({
        params: {
            uniqueUrlSlug: page.unique_url_slug,
        },
    }));

    return { paths, fallback: false, };
};

export default MyRoom;
