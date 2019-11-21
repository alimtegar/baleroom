import { useState, useEffect } from 'react';
import Skeleton from './Skeleton';

/* Helpers */
import { fixUrl } from '../helpers';

const AboutUs = () => {
    const [about, setAbout] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const adminUrl = process.env.ADMIN_URL ? fixUrl(process.env.ADMIN_URL) : 'https://example.com';

    useEffect(() => {
        fetch(adminUrl + '/companies?_limit=1')
            .then((res) => res.json())
            .then((data) => {
                setAbout(data[0].about);
                setIsLoading(false);
            });
    }, []);

    return (
        <section id="about-us" className="py-5">
            <div className="container">
                <div className="about-us-header text-center mb-0">
                    <h1 className="h2 mb-3">
                        About Baleroom
                    </h1>
                    <hr className="divider border-dark mb-3"/>
                    <div className="col-lg-8 m-auto">
                        {isLoading ? (
                            <div className="d-flex flex-column align-items-center">
                                <Skeleton className="w-100 mt-1px mb-1" height={14} />
                                <Skeleton className="w-100 my-1" height={14} />
                                <Skeleton className="w-50 mt-1 mb-1" height={14} />
                            </div>
                        ) : (
                            <p className="small text-muted text-center mb-0">
                                {about}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;