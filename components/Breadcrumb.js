import PropTypes from 'prop-types';

const Breadcrumb = ({pageTitle}) => {
    return (
        <nav id="breadcrumb" className="mask-dark text-white text-center py-5" aria-label="breadcrumb">
            <h1 className="h2 mb-3">
                {pageTitle}
            </h1>
            <div className="divider mb-3 border-white"/>
            <ol className="breadcrumb d-flex justify-content-center align-items-center bg-transparent mb-0 px-0 py-1">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                    <span>
                        Facilities
                    </span>
                </li>
            </ol>
        </nav>
    );
};

Breadcrumb.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    breadcrumb: PropTypes.array.isRequired,
}

export default Breadcrumb;