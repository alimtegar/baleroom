import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

/* Components */
import Slider from '../Slider';
import AmenitiesItem from '../amenities/AmenitiesItem';

const Room = ({ adminUrl, room }) => {
    const sliderImages = [
        room
    ];

    return (
        <section id="page" className="text-center py-5">
            <Slider height={360} adminUrl={adminUrl} sliderImages={sliderImages} className="mt-min-5" />

            <div className="page-body">
                <div className="container">
                    <div className="position-relative bg-white mt-min-4 p-5 border-bottom-2 shadow-sm">
                        <div className="page-header mb-5 px-3">
                            <h2 className="h6 font-weight-bold mb-2 pb-0-5">
                                {room && room.title}
                            </h2>
                            <h1 className="h4 mb-3">
                                {room && room.title}
                            </h1>
                            <div className="divider" />
                        </div>

                        <div className="page-content text-left mb-5">
                            <div className="small text-justify text-muted">
                                <Markdown>
                                    {room.content}
                                </Markdown>
                            </div>
                        </div>

                        <div className="mb-5 pb-4">
                            <div className="row">
                                <div className="col-lg-4">
                                    <AmenitiesItem icon="user-friends" title="2" description="Tamu Maksimal" />
                                </div>
                                <div className="col-lg-4">
                                    <AmenitiesItem icon="bed" title="1 Super King" description="Tipe Tempat Tidur" />
                                </div>
                                <div className="col-lg-4">
                                    <AmenitiesItem icon="ruler-combined" title="36 m²" description="Ukuran Kamar" />
                                </div>
                            </div>
                        </div>

                        <div className="page-amenities text-left">
                            <h3 className="h6 font-weight-bold mb-3">Amenities</h3>

                            <div className="small text-muted">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                Shower
                                            </li>
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                TV
                                            </li>
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                Telepon
                                            </li>
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                AC
                                            </li>
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                Balkon
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                Pemanas ruangan
                                            </li>
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                Kamar Rias
                                            </li>
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                TV Kabel
                                            </li>
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                Perapian
                                            </li>
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                Toilet Tamu
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                Pemandangan Kolam Renang
                                            </li>
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                Pemandangan Kota
                                            </li>
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                Telepon
                                            </li>
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                AC
                                            </li>
                                            <li className="nav-item">
                                                <i className="far fa-check-circle text-success fa-sm mr-2" />
                                                Balkon
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Room.propTypes = {
    adminUrl: PropTypes.string.isRequired,
    room: PropTypes.object.isRequired,
};

export default Room;