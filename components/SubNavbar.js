import { useState, useEffect } from 'react';
import Skeleton from './Skeleton';

/* Helpers */
import { fixUrl } from '../helpers';

const SubNavbar = () => {
    const [company, setCompany] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const adminUrl = process.env.ADMIN_URL ? fixUrl(process.env.ADMIN_URL) : 'https://example.com';

    useEffect(() => {
        fetch(adminUrl + '/companies?_limit=1')
            .then((res) => res.json())
            .then((data) => {
                setCompany(data[0]);
                setIsLoading(false);
            });
    }, [company])

    return (
        <div id="sub-navbar" className="navbar navbar-expand-lg z-1 d-none d-lg-block bg-dark text-white x-small py-2">
            <div className="container">
                <div className="mr-auto" />
                <div className="mx-min-3">
                    <div className="navbar-text px-3 py-0">
                        <i className="fa fa-map-marker-alt mr-2" />
                        {isLoading ? (<Skeleton className="y-min-2" type="dark" height={14}/>) : company.address}
                    </div> 
                    <div className="navbar-text px-3 py-0">
                        <i className="fa fa-envelope mr-2" />
                        {isLoading ? (<Skeleton className="y-min-2" type="dark" height={14}/>) : company.email}
                    </div>
                    <div className="navbar-text px-3 py-0">
                        <i className="fa fa-phone mr-2" />
                        {isLoading ? (<Skeleton className="y-min-2" type="dark" height={14}/>) : company.phone}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubNavbar;
