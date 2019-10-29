const AboutUs = () => {
    return (
        <section id="about-us" className="py-5">
            <div className="container">
                <div className="about-us-header text-center mb-5">
                    <h1 className="h6 font-weight-bold mb-0">
                        <i className="fa fa-users text-secondary mr-2" />
                        T E N T A N G &nbsp; K A M I
                    </h1>
                </div>
                <div className="about-us-body">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="d-flex h-100">
                                <span className="bg-dark py-4 px-5 rounded-2 shadow-sm">
                                    <img src="/static/images/baleroom-logo.png" alt="" height="18" className="y-1" />
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="d-flex justify-content-center flex-column h-100">
                                <p className="small mb-0">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores error dolorem quam vitae perspiciatis ea corrupti quas quae temporibus. Dolor vitae quisquam necessitatibus a nostrum doloremque officiis! Suscipit, eaque voluptate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;