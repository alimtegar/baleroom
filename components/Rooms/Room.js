import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/* Components */
import { TextLoader, MultiLineTextLoader } from '../Loaders';
import Slider from '../Slider';
import AmenitiesItem from '../amenities/AmenitiesItem';
import AmenitiesItemLoader from '../amenities/AmenitiesItemLoader';

// Import Helpers
import { range } from '../../helpers';

const Room = ({ room }) => {
    // let sliderImages = [];

    const roomAmenities = room.amenities;
    const roomAmenitiesInACol = 5;
    const roomAmenitiesColLength = Math.ceil(roomAmenities.length / roomAmenitiesInACol);

    // Use State
    const [roomImages, setRoomImages] = useState([]);

    // UseEffect
    useEffect(() => {
        if (room.id) {
            fetch(process.env.API_URL + 'items/room_images?filter[rooms_id]=' + room.id)
                .then((res) => res.json())
                .then((data) => {
                    const _roomImages = data.data;
                    let __roomImages = [];

                    _roomImages.map((_roomImage, i) => {
                        const __roomImage = {
                            id: _roomImage.id,
                            title: room.title + ' ' + (i + 1),
                            image: _roomImage.directus_files_id,
                        };

                        __roomImages.push(__roomImage);
                    });

                    setRoomImages(__roomImages);
                });
        }
    }, [room.id]);

    // Create Slider Images
    // room.image.map((roomImage, key) => {
    //     sliderImages.push({
    //         id: key,
    //         image: roomImage,
    //         title: room.title,
    //     });
    // });

    return (
        <section id="page" className="text-center py-5">
            <Slider sliderImages={roomImages} className="mt-min-5" />

            <div className="page-body">
                <div className="container">
                    <div className="position-relative bg-white mt-min-4 px-3 px-lg-5 py-5 border-bottom-2 shadow-sm">
                        <div className="page-header mb-5 px-3">
                            <h2 className="h6 mb-2 pb-0-5" style={{ height: 21, }}>
                                {room.sub_title ? room.sub_title : (<TextLoader height={18} width={126} />)}
                            </h2>
                            <h1 className="h4 mb-3" style={{ height: 29, }}>
                                {room.title ? room.title : ((<TextLoader height={29} width={145} />))}
                            </h1>
                            <div className="divider" />
                        </div>

                        <div className="page-content text-left">
                            {room.content ? (
                                <div className="small text-justify text-muted" dangerouslySetInnerHTML={{ __html: room.content }} />
                            ) : (
                                <MultiLineTextLoader lineTotal={2} lineHeight={5.25} height={16} width="100%" align="left" />)
                            }
                        </div>

                        {(room.occupants || room.bed || room.size) ? (
                            <div className="mt-1 mt-lg-5 pb-4">
                                <div className="row">
                                    {room.maximal_occupants && (
                                        <div className="col-lg-3">
                                            <AmenitiesItem icon="user-friends" title={room.maximal_occupants} description="Max. Occupants" secondary={true} />
                                        </div>
                                    )}
                                    {room.bed_type && (
                                        <div className="col-lg-6">
                                            <AmenitiesItem icon="bed" title={room.bed_type} description="Bed Type" secondary={true} />
                                        </div>
                                    )}
                                    {room.size && (
                                        <div className="col-lg-3">
                                            <AmenitiesItem icon="ruler-combined" title={room.size} description="Room Size" secondary={true} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                                <div className="mt-1 mt-lg-5 pb-4">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <AmenitiesItemLoader secondary={true} />
                                        </div>
                                        <div className="col-lg-6">
                                            <AmenitiesItemLoader secondary={true} />
                                        </div>
                                        <div className="col-lg-3">
                                            <AmenitiesItemLoader secondary={true} />
                                        </div>
                                    </div>
                                </div>
                            )}

                        {room.amenities.length ? (
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
                                                                    {/* <i className="far fa-times-circle fa-sm text-danger mr-2"></i> */}
                                                                    <i className="far fa-check-circle fa-sm text-success mr-2"></i>
                                                                </div>
                                                                <div className="d-table-cell">
                                                                    {roomAmenitiesItem}
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
                        ) : (
                                <div className="page-amenities text-left mt-5">
                                    <div className="small text-muted">
                                        <div className="row">
                                            {range(0, 3).map((key) => (
                                                <div className="col-lg-4" key={key}>
                                                    <ul className="nav flex-column">
                                                        {range(0, 5).map((key) => (

                                                            <li className="nav-item" key={key}>
                                                                {/* <div style={{ height: 16, }}> */}
                                                                    <div className="d-table-cell">
                                                                        {/* <i className="far fa-times-circle fa-sm text-danger mr-2"></i> */}
                                                                        <i className="far fa-check-circle fa-sm text-success mr-2"></i>
                                                                    </div>
                                                                    <div className="d-table-cell">
                                                                        <TextLoader height={18} width={150} />
                                                                    </div>
                                                                {/* </div> */}
                                                            </li>
                                                        ))}
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
    roomImages: PropTypes.array.isRequired,
};

export default Room;
