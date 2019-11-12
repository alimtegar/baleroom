import Link from './Link';

const Amenities = () => {
    const facilities = [
        {
            id: 1,
            icon: 'swimming-pool',
            title: 'Outdoor Pool',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.'
        },
        {
            id: 2,
            icon: 'wifi',
            title: 'Free Wi-Fi',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.'
        },
        {
            id: 3,
            icon: 'clock',
            title: '24 Hrs Front Desk',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.'
        },
        {
            id: 4,
            icon: 'bed',
            title: 'Room Service',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing.'
        },
    ];

    return (
        <section id="facilities" className="text-center py-5">
            <div className="facilities-header px-3 mb-5">
                <h1 className="h2 mb-3">
                    Our Amenities
                    </h1>
                <hr className="divider border-dark" />
            </div>

            <div className="facilities-body mask-dark text-white">
                <div className="container p-3">
                    <div className="row m-min-2">
                        {facilities.map((facility) => (
                            <div className="col-lg-3 p-2" key={facility.id}>
                                <div className="facilities-item border-effect px-3 py-6 text-center">
                                    <span>
                                        <div className="item-icon circle circle-lg bg-primary text-white mb-4 shadow-sm">
                                            <i className={`fa fa-${facility.icon} fa-lg y-min-1`} />
                                        </div>

                                        <h2 className="h5 mb-3">
                                            {facility.title}
                                        </h2>
                                        <div className="divider"/>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="facilities-footer mt-5">
                <Link href="/amenitites">
                    <a role="button" className="btn btn-outline-dark">
                        VIEW ALL AMENITIES
                    </a>
                </Link>
            </div>
        </section>

    );
};

export default Amenities;