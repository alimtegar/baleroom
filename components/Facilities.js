const Facilities = () => {
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
            <div className="facilities-header mb-5">
                <h1 className="h2 mb-3">
                    Our Facilities
                    </h1>
                <hr className="divider border-dark mb-3" />
                <p className="text-muted small mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
            </div>

            <div className="facilities-body mask-dark text-white">
                <div className="container">
                    <div className="row mx-min-2">
                        {facilities.map((facility) => (
                            <div className="col-lg-3 px-2" key={facility.id}>
                                <div className="py-2 py-lg-3">
                                    <div className="facilities-item border-effect px-4 py-5 text-center">
                                        <span>
                                            <div className="item-icon circle circle-lg bg-primary text-white mb-4 shadow-sm">
                                                <i className={`fa fa-${facility.icon} fa-lg y-min-1`} />
                                            </div>

                                            <h2 className="h4 mb-3">
                                                {facility.title}
                                            </h2>
                                            <hr className="divider border-white mb-3" />
                                            <p className="small mb-0">
                                                {facility.description}
                                            </p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="facilities-footer mt-5">
                <button className="btn btn-outline-dark">
                    VIEW ALL FACILITIES
                    </button>
            </div>
        </section>

    );
};

export default Facilities;