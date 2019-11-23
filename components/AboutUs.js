import PropTypes from 'prop-types';

const AboutUs = ({ company }) => {
    return (
        <section id="about-us" className="py-5">
            <div className="container">
                <div className="about-us-header text-center mb-0">
                    <h1 className="h4 mb-3">
                        About {company.title}
                    </h1>
                    <hr className="divider border-dark mb-3" />
                    <div className="col-lg-8 m-auto">
                        <p className="small text-muted text-center mb-0">
                            {company.about}
                        </p>
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