import PropTypes from 'prop-types';
import Link from '../Link';

/* Import Components */
import AmenitiesItem from './AmenitiesItem';
import AmenitiesItemLoader from './AmenitiesItemLoader';

// Import Helpers
import { range } from '../../helpers';


const Amenities = ({ amenities }) => {
    return (
        <section id="amenities" className="text-center py-5">
            <div className="amenities-body mask-dark text-white pt-5">
                <div className="mb-1 mb-lg-5">
                    <h1 className="h4 mb-3">
                        Our Amenities
                    </h1>
                    <hr className="divider border-white mb-0" />
                </div>
                <div className="container">
                    <div className="row m-min-2">
                        {amenities.length ? amenities.map((amenity) => (
                            <div className="col-lg-3" key={amenity.id}>
                                <AmenitiesItem icon={amenity.icon} title={amenity.title} description="Amenity" />
                            </div>
                        )) : range(0, 4).map((key) => (
                            <div className="col-lg-3" key={key}>
                                <AmenitiesItemLoader />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="amenities-footer mt-5 pt-4">
                <Link href="/amenities">
                    <a role="button" className="btn btn-outline-dark">
                        View All Amenities
                    </a>
                </Link>
            </div>
        </section>
    );
};

Amenities.propTypes = {
    amenities: PropTypes.array.isRequired,
};

export default Amenities;
