import PropTypes from 'prop-types';

const AboutUs = ({ company }) => {
    return (
        <section id="about-us" className="pb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="about-us-body bg-white text-center mt-min-4 mb-0 p-5 border-bottom-2 shadow-sm">
                            <h1 className="h4 mb-3">
                                About {company.title}
                            </h1>
                            <hr className="divider border-dark mb-3" />
                            <p className="small text-muted text-center mb-0">
                                {company.about}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

AboutUs.propTypes = {
    company: PropTypes.object.isRequired,
};

export default AboutUs;