import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const Room = ({ adminUrl, room }) => {
    return (
        <section id="page" className="text-center py-5">
            <div className="page-image position-relative d-flex justify-content-center align-items-center mt-min-5 overflow-hidden">
                <img
                    src={adminUrl + room.image.url}
                    alt=""
                    className="position-absolute fit-width"
                />
            </div>

            <div className="page-header my-5 px-3">
                <h1 className="h4 mb-3">
                    {room && room.title}
                </h1>
                <div className="divider" />
            </div>

            <div className="page-body">
                <div className="container">
                    <div className="small text-justify text-muted">
                        <Markdown>
                            {room.content}
                        </Markdown>
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