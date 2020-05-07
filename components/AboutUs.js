import PropTypes from 'prop-types';

const AboutUs = ({ title, content }) => {
    return (
        <section id="about-us" className="pb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="about-us-body bg-white text-center mt-min-4 mb-0 px-3 px-lg-5 py-5 border-bottom-2 shadow-sm">
                            <h1 className="h4 mb-3">
                                About {title}
                            </h1>
                            <hr className="divider border-dark mb-3" />
                            <div className="small text-muted text-justify text-lg-center mb-0" dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

AboutUs.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default AboutUs;