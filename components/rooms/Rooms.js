import Link from '../Link';
import PropTypes from 'prop-types';

const Rooms = ({ adminUrl, rooms, showFooter }) => {
    return (
        <section id="rooms" className="text-center py-5">
            <div className="rooms-header mb-5 px-3">
                <h1 className="h4 mb-3">
                    Our Rooms
                </h1>
                <hr className="divider border-dark mb-3" />
            </div>
            <div className="rooms-body text-white">
                <div className="container-fluid px-0 overflow-hidden">
                    <div className="row m-min-2">
                        {rooms.map((room) => {
                            const col = 4;
                            const fit = 'height';

                            return (
                                <div className={`col-lg-${col} p-2`} key={room.id}>
                                    <div className="rooms-item bg-mask-dark">
                                        <div className="item-img position-relative d-flex justify-content-center align-items-center h-100 overflow-hidden">
                                            <img src={adminUrl + room.image.url} alt={room.title} className={`position-absolute z-min-1 fit-${fit}`} />
                                        </div>
                                        <div className="item-content border-effect position-absolute top-50 left-50 xy-min-50 d-flex flex-column justify-content-center align-items-center">
                                            <span>
                                                <h2 className="h3 mb-0">
                                                    {room.title}
                                                </h2>
                                                <p className="h6 mb-0">
                                                    {room.description}
                                                </p>

                                                <div className="item-subcontent">
                                                    <Link href="/room/id" as={'/rooms/' + room.id}>
                                                        <a className="btn btn-primary mt-3 shadow-sm">
                                                            MORE INFO <i className="fa fa-chevron-right ml-1" />
                                                        </a>
                                                    </Link>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {showFooter ? (
                <div className="rooms-footer mt-5">
                    <Link href="/rooms">
                        <a role="button" className="btn btn-outline-dark">
                            VIEW ALL ROOMS
                        </a>
                    </Link>
                </div>
            ) : null}
        </section>
    );
};

Rooms.propTypes = {
    adminUrl: PropTypes.string.isRequired,
    rooms: PropTypes.array.isRequired,
    showFooter: PropTypes.bool.isRequired,
};

Rooms.defaultProps = {
    showFooter: true,
};

export default Rooms;