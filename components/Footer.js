const Footer = () => {
    const nav = [
        {
            id: 1,
            title: 'About Us',
            link: '#'
        },
        {
            id: 2,
            title: 'Privacy Policy',
            link: '#'
        },
        {
            id: 3,
            title: 'Contact Us',
            link: '#'
        },
    ];
    const socialMedia = [
        {
            id: 1,
            brand: 'facebook',
            icon: 'facebook-f',
            link: '#',
        },
        {
            id: 2,
            brand: 'twitter',
            icon: 'twitter',
            link: '#',
        },
    ];

    return (
        <footer id="footer" className="bg-dark py-3">
            <div className="container">
                <div className="footer-panel d-flex align-items-start align-items-lg-center py-2">
                    <ul className="footer-nav nav flex-column flex-lg-row mr-auto ml-min-3 ml-lg-0">
                        {nav.map((navItem) => (
                            <li className="nav-item" key={navItem.id}>
                                <a href={navItem.link} className="nav-link">
                                    {navItem.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="footer-social-media nav flex-column flex-lg-row m-min-1">
                        {socialMedia.map((socialMediaItem) => (
                            <li className="nav-item" key={socialMediaItem.id}>
                                <a href={socialMediaItem.link} className={`nav-link ${socialMediaItem.brand}`}>
                                    <i className={`fab fa-${socialMediaItem.icon}`}/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-copyright text-white x-small text-center py-3">
                    <p className="x-small mb-0">
                        &copy; Copyright Baleroom 2019. All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;