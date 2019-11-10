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
        <footer id="footer" className="bg-dark">
            <div className="container">
                <div className="footer-panel d-flex align-items-center py-3">
                    <ul className="footer-nav nav mr-auto">
                        {nav.map((navItem) => (
                            <li className="nav-item" key={navItem.id}>
                                <a href={navItem.link} className="nav-link">
                                    {navItem.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="footer-social-media nav m-min-2">
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