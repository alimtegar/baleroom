const Loader = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vw-100 vh-100">
            <div className="spinner-border text-primary mb-3" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <span className="h6">
                Loading...
            </span>
        </div>
    );
};

export default Loader;