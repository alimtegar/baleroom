import BarLoader from "react-spinners/BarLoader";

const Loader = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vw-100 vh-100 mask-dark" style={{
            backgroundImage: 'url(/static/images/baleroom-background.jpg)',
            backgroundPosition: 'center',
        }}>
            {/* <div style={{ transform: 'translateY(-7.5px)' }}> */}
                <img src="/static/images/baleroom-logo.png" alt={process.env.APP_NAME} className="mb-3"/>
                <BarLoader
                    color={"#fff"}
                    css={{
                        height: 3,
                    }}
                />
            {/* </div> */}
            {/* <div className="spinner-border text-primary mb-3" role="status">
                <span className="sr-only">Loading...</span>
            </div> */}
        </div>
    );
};

export default Loader;