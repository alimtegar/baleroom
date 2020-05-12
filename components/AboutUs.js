import PropTypes from 'prop-types';

// Import Components
import { MultiLineTextLoader } from './Loaders';

const AboutUs = ({ content }) => {
    return (
        <section id="about-us" className="pb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="about-us-body bg-white text-center mt-min-4 mb-0 px-3 px-lg-5 py-5 border-bottom-2 shadow-sm">
                            <h1 className="h4 mb-3">
                                {/* {title ? 'About ' + title : (<TextLoader height={29} width={201} />)} */}
                                About {process.env.APP_NAME}
                            </h1>
                            <hr className="divider border-dark mb-3" />
                            {content ? (
                                <div className="small text-muted text-justify text-lg-center mb-0" dangerouslySetInnerHTML={{ __html: content }} />
                            ) : (
                                <div className="mb-3">
                                    <MultiLineTextLoader lineTotal={3} lineHeight={5.25} height={16} width="100%" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

AboutUs.propTypes = {
    content: PropTypes.string.isRequired,
};

export default AboutUs;