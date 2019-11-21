import { useState, useEffect } from 'react';
import Skeleton from './Skeleton';

/* Helpers */
import { fixUrl } from '../helpers';

const Footer = () => {
    const [nav, setNav] = useState([]);
    const [socialMedia, setSocialMedia] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const adminUrl = process.env.ADMIN_URL ? fixUrl(process.env.ADMIN_URL) : 'https://example.com';

    useEffect(() => {
        Promise.all([
            fetch(adminUrl + '/links?position_eq=bottom'),
            fetch(adminUrl + '/socialmedias'),
        ])
            .then(async ([res1, res2]) => {
                const data1 = await res1.json();
                const data2 = await res2.json();
                return [data1, data2];
            })
            .then(([data1, data2]) => {
                setNav(data1);
                setSocialMedia(data2);
                setIsLoading(false);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <footer id="footer" className="bg-dark">
            <div className="container">
                <div className="footer-panel d-flex align-items-start align-items-lg-center py-2">
                    <ul className="footer-nav nav flex-column flex-lg-row mr-auto ml-min-3 ml-lg-0">
                        {isLoading ? [...Array(3).keys()].map((i) => (
                            <li className="nav-item" key={i}>
                                <div className="p-3 mb-min-1">
                                    <Skeleton className="y-min-2" type="dark" height={18} />
                                </div>
                            </li>)) : nav.map((navItem) => (
                                <li className="nav-item" key={navItem.id}>
                                    <a href={navItem.link} className="nav-link">
                                        {navItem.title}
                                    </a>
                                </li>
                            ))}
                    </ul>
                    <ul className="footer-social-media nav flex-column flex-lg-row m-min-1">
                        {isLoading ? [...Array(3).keys()].map((i) => (
                            <li className="nav-item" key={i}>
                                <div className="m-1">
                                    <Skeleton className="y-min-2" type="dark" width={36} height={36} />
                                </div>
                            </li>
                        )) : socialMedia.map((socialMediaItem) => (
                            <li className="nav-item" key={socialMediaItem.id}>
                                <a href={socialMediaItem.link} className={`nav-link ${socialMediaItem.title.toLowerCase()}`} target="_blank" rel="noopener" aria-label={socialMediaItem.title}>
                                    <i className={`fab fa-${socialMediaItem.icon}`} />
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="footer-copyright text-white x-small text-center py-3">
                    <p className="x-small mb-0">
                        &copy; Baleroom 2019. All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;