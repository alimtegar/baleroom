import { useState, useEffect } from 'react';
import Link from '../Link';
import PropTypes from 'prop-types';

// Import Components
import { BackgroundLoader } from '../Loaders';

// Import Helpers
import { isObjectEmpty } from '../../helpers';

const RoomsItem = ({ col, fit, id, title, subTitle, uniqueUrlSlug }) => {
    const apiUrl = process.env.API_URL;

    // Use State
    const [roomsItemImage, setRoomsItemImage] = useState({});

    // Use Effect
    useEffect(() => {
        fetch(apiUrl + 'items/room_images?limit=1&filter[rooms_id]=' + id)
            .then((res) => res.json())
            .then((data) => {
                fetch(apiUrl + 'files/' + data.data[0].directus_files_id)
                    .then((res) => res.json())
                    .then((image) => {
                        setRoomsItemImage(image);
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={`col-lg-${col} p-0-25`}>
            {!isObjectEmpty(roomsItemImage) ? (
                <div className="rooms-item bg-mask-dark">
                    <div className="item-img position-relative d-flex justify-content-center align-items-center h-100 overflow-hidden">
                        <img src={roomsItemImage.data.data.thumbnails[4].url} alt={title} className={`position-absolute z-min-1 fit-${fit}`} />
                    </div>
                    <div className="item-content border-effect position-absolute top-50 left-50 xy-min-50 d-flex flex-column justify-content-center align-items-center">
                        <span>
                            <h3 className="h6 mb-2 pb-0-25">
                                {subTitle}
                            </h3>
                            <h2 className="h4 mb-3">
                                {title}
                            </h2>
                            <div className="divider border-white"></div>

                            <div className="item-subcontent">
                                <Link href="/room/id" as={'/rooms/' + uniqueUrlSlug}>
                                    <a className="btn btn-outline-light mt-4 shadow-sm">More Info</a>
                                </Link>
                            </div>
                        </span>
                    </div>
                </div>
            ) : (
                    <div className="rooms-item">
                        <div className="item-img position-relative d-flex h-100 overflow-hidden">
                            <BackgroundLoader />
                        </div>
                    </div>
                )}
        </div>
    );
};

RoomsItem.propTypes = {
    col: PropTypes.number.isRequired,
    fit: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    uniqueUrlSlug: PropTypes.string.isRequired,
};

export default RoomsItem;
