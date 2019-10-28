const SubNavbar = () => {
    return (
        <div className="navbar navbar-expand-lg bg-primary text-white x-small py-2">
            <div className="container">
                <div className="mr-auto" />
                <div className="mx-min-2">
                    <div className="navbar-text mx-2 py-0">
                        <i className="fa fa-map-marker-alt mr-2" />
                        Grand Center Point Jl. Ayani Kav 20 , Bekasi, Indonesia
                    </div>
                    |
                    <div className="navbar-text mx-2 py-0">
                        <i className="fa fa-envelope mr-2" />
                        mail@example.com
                    </div>
                    |
                    <div className="navbar-text mx-2 py-0">
                        <i className="fa fa-phone mr-2" />
                        0274-1234-5678
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubNavbar;