import Link from '../Link';
import PropTypes from 'prop-types';

// Import Helpers
import {range} from '../../helpers';

// Import Components
import RoomsItem from './RoomsItem';
import RoomsItemLoader from './RoomsItemLoader';

const Rooms = ({ rooms, showFooter, loaderTotal }) => (
    <section id="rooms" className="text-center py-5">
        <div className="rooms-header mb-5 px-3">
            <h1 className="h4 mb-3">
                Our Rooms
                </h1>
            <hr className="divider border-dark mb-3" />
        </div>
        <div className="rooms-body text-white">
            <div className="container-fluid px-0 overflow-hidden">
                <div className="row m-min-0-25">
                    {rooms.length ? rooms.map((room, key) => {
                        const a = key + 1;
                        const b = a > 5 ? a % 5 : a;

                        const col = b > 3 ? 6 : 4;
                        const fit = b > 3 ? 'width' : 'height';

                        return (<RoomsItem col={col} fit={fit} id={room.id} title={room.title} subTitle={room.title} uniqueUrlSlug={room.unique_url_slug} key={room.id} />);
                    }) : range(0, loaderTotal).map((key) => {
                        const a = key + 1;
                        const b = a > 5 ? a % 5 : a;

                        const col = b > 3 ? 6 : 4;
                        const fit = b > 3 ? 'width' : 'height';

                        return (<RoomsItemLoader col={col} key={key} />);
                    })}
                </div>
            </div>
        </div>

        {showFooter ? (
            <div className="rooms-footer mt-5">
                <Link href="/rooms">
                    <a role="button" className="btn btn-outline-dark">View All Rooms</a>
                </Link>
            </div>
        ) : null}
    </section>
);

Rooms.propTypes = {
    rooms: PropTypes.array.isRequired,
    showFooter: PropTypes.bool.isRequired,
    loaderTotal: PropTypes.number.isRequired,
};

Rooms.defaultProps = {
    showFooter: true,
    showFooter: 3,
};

export default Rooms;
