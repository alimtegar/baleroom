import Link from './Link';
import PropTypes from 'prop-types';

const Rooms = ({ showFooter }) => {
    const rooms = [
        {
            id: 1,
            title: 'Studio Room',
            description: 'Simply Comfort',
            img: 'baleroom-background-sm.jpg',
        },
        {
            id: 2,
            title: '2 Bed Room',
            description: 'Family Space',
            img: 'baleroom-background-sm.jpg',
        },
        {
            id: 3,
            title: 'Executive Room',
            description: 'Luxuriously Wide',
            img: 'baleroom-background-sm.jpg',
        },
    ];

    return (
        <section id="rooms" className="text-center py-5">
            <div className="rooms-header mb-5 px-3">
                <h1 className="h2 mb-3">
                    Our Rooms
                </h1>
                <hr className="divider border-dark mb-3" />
            </div>

            <div className="rooms-body text-white">
                <div className="container-fluid overflow-hidden">
                    <div className="row m-min-2">
                        {rooms.map((room, key) => {
                            // const col = key < 2 ? 6 : 4;
                            // const fit = key < 2 ? 'width' : 'height';

                            const col = 4;
                            const fit = 'height';

                            return (
                                <div className={`col-lg-${col} p-2`} key={room.id}>
                                    <div className="rooms-item bg-mask-dark">
                                        <div className="item-img position-relative d-flex justify-content-center align-items-center h-100 overflow-hidden">
                                            <img src={`/static/images/${room.img}`} alt={room.title} className={`position-absolute z-min-1 fit-${fit}`} />
                                        </div>
                                        <div className="item-content border-effect position-absolute top-50 left-50 xy-min-50 d-flex flex-column justify-content-center align-items-center">
                                            <span>
                                                <h2 className="h3 mb-0">
                                                    {room.title}
                                                </h2>
                                                <p className="h6 font-weight-bold">
                                                    {room.description}
                                                </p>
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
    showFooter: PropTypes.bool.isRequired,
};

Rooms.defaultProps = {
    showFooter: true,
};

export default Rooms;