const Loader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;