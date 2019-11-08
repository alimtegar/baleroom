const Facilities = () => {
    const facilities = [
        {
            id: 1,
            icon: 'heart',
            title: 'Comfortable',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            id: 2,
            icon: 'bed',
            title: 'Hi-Quality',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            id: 3,
            icon: 'concierge-bell',
            title: 'Good Service',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            id: 4,
            icon: 'bolt',
            title: 'Comfortable',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
    ];

    return (
        <section id="facilities" className="text-center py-5">
            
                <div className="facilities-header mb-5">
                    <h1 className="h2 mb-3">
                        Our Facilities
                    </h1>
                    <hr class="divider border-dark mb-3"/>
                    <p className="text-muted small mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            
                <div className="facilities-body bg-dark text-white my-min-3">
                    <div className="container">
                    <div className="row mx-min-2">
                        {facilities.map((facility) => (
                            <div className="col-lg-3 px-2" key={facility.id}>
                                <div className="py-2 py-lg-3">
                                    <div className="facilities-item px-4 py-5 text-center">
                                        <div className="item-icon circle circle-lg bg-primary text-white mb-4 shadow-sm">
                                            <i className={`fa fa-${facility.icon} fa-lg y-min-1`} />
                                        </div>

                                        <h2 className="h4 mb-3">
                                            {facility.title}
                                         </h2>
                                         <hr className="divider border-white mb-3"/>
                                        <p className="text-muted x-small mb-0">
                                            {facility.description}
                                        </p>
                                    </div>
                                </div>
                            </div>    
                        ))}
                    </div>
                    </div>
                </div>
        </section>

    );
};

export default Facilities;