import PropTypes from 'prop-types';
import Link from './Link';

const Amenities = ({ amenities }) => {
    return (
        <section id="amenities" className="text-center py-5">
            <div className="amenities-header px-3 mb-5">
                <h1 className="h4 mb-3">
                    Our Amenities
                    </h1>
                <hr className="divider border-dark mb-0" />
            </div>
            <div className="amenities-body mask-dark text-white">
                <div className="container p-3">
                    <div className="row m-min-2">
                        {amenities.map((amenity) => (
                            <div className="col-lg-3 p-2" key={amenity.id}>
                                <div className="amenities-item border-effect px-3 py-6 text-center">
                                    <span>
                                        <div className="item-icon circle circle-lg bg-primary text-white mb-3 shadow-sm">
                                            <i className={`fa fa-${amenity.icon} fa-lg y-min-1`} />
                                        </div>

                                        <h2 className="h6 mb-0">
                                            {amenity.title}
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
        </section>
    );
};

Amenities.propTypes = {
    amenities: PropTypes.array.isRequired,
};

export default Amenities;