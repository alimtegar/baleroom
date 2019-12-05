import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

/* Components */
import Slider from '../Slider';
import AmenitiesItem from '../amenities/AmenitiesItem';

const Room = ({ room }) => {
    let sliderImages = [];

    const roomAmenities = room.amenities ? room.amenities.split('\n') : [];
    const roomAmenitiesInACol = 5;
    const roomAmenitiesColLength = Math.ceil(roomAmenities.length / roomAmenitiesInACol);

    room.image.map((roomImage, key) => {
        sliderImages.push({
            id: key,
            image: roomImage,
            title: room.title,
        });
    });

    return (
        <section id="page" className="text-center py-5">
            <Slider sliderImages={sliderImages} className="mt-min-5" />

            <div className="page-body">
                <div className="container">
                    <div className="position-relative bg-white mt-min-4 px-3 px-lg-5 py-5 border-bottom-2 shadow-sm">
                        <div className="page-header mb-5 px-3">
                            <h2 className="h6 mb-2 pb-0-5">
                                {room && room.description}
                            </h2>
                            <h1 className="h4 mb-3">
                                {room && room.title}
                            </h1>
                            <div className="divider" />
                        </div>

                        <div className="page-content text-left">
                            <div className="small text-justify text-muted">
                                <Markdown>
                                    {room.content}
                                </Markdown>
                            </div>
                        </div>

                        {(room.occupants || room.bed || room.size) && (
                            <div className="mt-1 mt-lg-5 pb-4">
                                <div className="row">
                                    {room.occupants && (
                                        <div className="col-lg-4">
                                            <AmenitiesItem icon="user-friends" title={room.occupants} description="Maximal Occupants" />
                                        </div>
                                    )}
                                    {room.bed && (
                                        <div className="col-lg-4">
                                            <AmenitiesItem icon="bed" title={room.bed} description="Bed Type" />
                                        </div>
                                    )}
                                    {room.size && (
                                        <div className="col-lg-4">
                                            <AmenitiesItem icon="ruler-combined" title={room.size} description="Room Size" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {room.amenities && (
                            <div className="page-amenities text-left mt-5">
                                <div className="small text-muted">
                                    <div className="row">
                                        {[...Array(roomAmenitiesColLength)].map((_, i) => (
                                            <div className="col-lg-4" key={i}>
                                                <ul className="nav flex-column">
                                                    {[...Array(roomAmenitiesInACol)].map((_, j) => {
                                                        const roomAmenitiesItem = roomAmenities[(i * roomAmenitiesInACol) + j];

                                                        return roomAmenitiesItem && (
                                                            <li className="nav-item" key={j}>
                                                                <div className="d-table-cell">
                                                                    {roomAmenitiesItem.indexOf('(prohibition)') !== -1 ? (
                                                                        <i className="far fa-times-circle fa-sm text-danger mr-2"></i>
                                                                    ) : (
                                                                            <i className="far fa-check-circle fa-sm text-success mr-2"></i>
                                                                        )}
                                                                </div>
                                                                <div className="d-table-cell">
                                                                    {roomAmenitiesItem.replace('(prohibition)', '')}
                                                                </div>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

Room.propTypes = {
    room: PropTypes.object.isRequired,
};

export default Room;
