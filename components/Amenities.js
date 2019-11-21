import { useState, useEffect } from 'react';
import Link from './Link';
import Skeleton from './Skeleton';

/* Helpers */
import { fixUrl } from '../helpers';

const Amenities = () => {
    const [amenities, setAmenities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const adminUrl = process.env.ADMIN_URL ? fixUrl(process.env.ADMIN_URL) : 'https://example.com';

    useEffect(() => {
        fetch(adminUrl + '/popularamenities?_limit=4')
            .then((res) => res.json())
            .then((data) => {
                setAmenities(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <section id="amenities" className="text-center py-5">
            <div className="amenities-header px-3 mb-5">
                <h1 className="h2 mb-3">
                    Our Amenities
                    </h1>
                <hr className="divider border-dark" />
            </div>
            {isLoading ? (
                <div>
                    <div className="bg-light">
                        <div className="container p-3">
                            <div className="row m-min-2">
                                {[...Array(4).keys()].map((i) => (
                                    <div className="col-lg-3 p-2" key={i}>
                                        <div className="amenities-item px-3 py-6 text-center">
                                            <span>
                                                <Skeleton className="d-flex mx-auto item-icon circle circle-lg mb-3" />
                                                <Skeleton className="d-flex mx-auto" width={100} height={19} />
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="amenities-footer mt-5">
                        <Skeleton className="mt-1px mb-min-2" width={200} height={49} />
                    </div>
                </div>
            ) : (
                <div>
                    <div className="amenities-body mask-dark text-white">
                        <div className="container p-3">
                            <div className="row m-min-2">
                                {amenities.map((facility) => (
                                    <div className="col-lg-3 p-2" key={facility.id}>
                                        <div className="amenities-item border-effect px-3 py-6 text-center">
                                            <span>
                                                <div className="item-icon circle circle-lg bg-primary text-white mb-3 shadow-sm">
                                                    <i className={`fa fa-${facility.icon} fa-lg y-min-1`} />
                                                </div>

                                                <h2 className="h6 mb-0">
                                                    {facility.title}
                                                </h2>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="amenities-footer mt-5">
                        <Link href="/amenitites">
                            <a role="button" className="btn btn-outline-dark">
                                VIEW ALL AMENITIES
                            </a>
                        </Link>
                    </div>
                </div>
            )}
        </section>

    );
};

export default Amenities;